import { useState, useEffect } from "react";
import { Project } from "../types/github";
import { fetchPinnedRepos } from "../services/github";
import { projectsData } from "../data";

export function useGitHubRepos() {
  const [projects, setProjects] = useState<Project[]>(projectsData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadRepos() {
      try {
        setLoading(true);
        const repos = await fetchPinnedRepos();

        if (isMounted) {
          // If GitHub fetch successful and has repos, use them
          // Otherwise fallback to static data
          if (repos.length > 0) {
            setProjects(repos);
          } else {
            setProjects(projectsData);
          }
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : "Failed to load repos");
          // Fallback to static data on error
          setProjects(projectsData);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadRepos();

    return () => {
      isMounted = false;
    };
  }, []);

  return { projects, loading, error };
}
