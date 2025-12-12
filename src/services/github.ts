import { GitHubRepository, Project } from "../types/github";
// Old images
import firstPortfolio from "../images/firstportfolio.png";
import game from "../images/game.png";
import weather from "../images/weather.png";
import matterjs from "../images/matterjs.png";
import mern from "../images/mern.png";
import secondPortfolio from "../images/secondportfolio.png";
import commonDestination from "../images/commondestination.png";
// Auto-generated screenshots
import naturalizationTest from "../images/naturalization-test.png";
import danielMeyer from "../images/daniel-meyer-repo.png";
import commonDestFinalProject from "../images/common-destination-final-project.png";
import portfolioReact from "../images/portfolio_react.png";
import reactWeatherApp from "../images/react-weather-app.png";
import matterjsProject from "../images/matterjsproject.png";
import githubReposFinder from "../images/github-repos-finder.png";

const GITHUB_USERNAME = "Pierluigi10";
const GITHUB_API_URL = "https://api.github.com";
const GITHUB_GRAPHQL_URL = "https://api.github.com/graphql";
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

// Map repository names to local images
const IMAGE_MAP: Record<string, string> = {
  // New auto-generated screenshots
  "naturalization-test": naturalizationTest,
  "daniel-meyer-repo": danielMeyer,
  "Common-Destination-Final-Project": commonDestFinalProject,
  "common-destination-final-project": commonDestFinalProject,
  "Portfolio_React": portfolioReact,
  "portfolio_react": portfolioReact,
  "react-weather-app": reactWeatherApp,
  "matterjsproject": matterjsProject,
  "matterjs-project": matterjsProject,
  "github-repos-finder": githubReposFinder,
  // Old images (fallback)
  "commondestination": commonDestination,
  "common-destination": commonDestination,
  "matterjs": matterjs,
  "weatherapp": weather,
  "weather-app": weather,
  "mernshowcase": mern,
  "mern-showcase": mern,
  "littlegamejs": game,
  "little-game-js": game,
  "firstportfolio": firstPortfolio,
  "first-portfolio": firstPortfolio,
};

function getImageForRepo(repoName: string): string | undefined {
  const normalizedName = repoName.toLowerCase().replace(/[-_]/g, "");

  // Try exact match first
  if (IMAGE_MAP[repoName.toLowerCase()]) {
    return IMAGE_MAP[repoName.toLowerCase()];
  }

  // Try normalized name
  for (const [key, value] of Object.entries(IMAGE_MAP)) {
    if (key.toLowerCase().replace(/[-_]/g, "") === normalizedName) {
      return value;
    }
  }

  return undefined;
}

/**
 * Fetch pinned repositories using GitHub GraphQL API
 */
async function fetchPinnedReposWithGraphQL(): Promise<GitHubRepository[]> {
  const query = `
    query {
      user(login: "${GITHUB_USERNAME}") {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              id
              name
              description
              url
              homepageUrl
              primaryLanguage {
                name
              }
              stargazerCount
              createdAt
              updatedAt
            }
          }
        }
      }
    }
  `;

  const response = await fetch(GITHUB_GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${GITHUB_TOKEN}`,
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    throw new Error(`GitHub GraphQL API error: ${response.status}`);
  }

  const data = await response.json();

  if (data.errors) {
    throw new Error(`GraphQL errors: ${JSON.stringify(data.errors)}`);
  }

  return data.data.user.pinnedItems.nodes.map((repo: any) => ({
    id: repo.id,
    name: repo.name,
    description: repo.description,
    html_url: repo.url,
    homepage: repo.homepageUrl,
    language: repo.primaryLanguage?.name,
    stargazers_count: repo.stargazerCount,
    created_at: repo.createdAt,
    updated_at: repo.updatedAt,
    fork: false,
  }));
}

/**
 * Fetch languages for a repository
 */
async function fetchRepoLanguages(languagesUrl: string): Promise<string[]> {
  try {
    const response = await fetch(languagesUrl);
    if (!response.ok) return [];

    const languages: Record<string, number> = await response.json();
    // Return languages sorted by usage (most used first)
    return Object.keys(languages).sort((a, b) => languages[b] - languages[a]);
  } catch (error) {
    console.error("Error fetching languages:", error);
    return [];
  }
}

/**
 * Fetch repositories with "showcase" topic and sort by creation date
 */
async function fetchShowcaseRepos(): Promise<GitHubRepository[]> {
  const response = await fetch(
    `${GITHUB_API_URL}/users/${GITHUB_USERNAME}/repos?per_page=100`
  );

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`);
  }

  const repos: GitHubRepository[] = await response.json();

  // Filter repos with "showcase" topic and not forks, then sort by creation date (newest first)
  return repos
    .filter((repo) => !repo.fork && repo.topics.includes("showcase"))
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
}

/**
 * Main function to fetch repos with "showcase" topic
 */
export async function fetchPinnedRepos(): Promise<Project[]> {
  try {
    // Fetch repos with "showcase" topic, sorted by creation date
    const showcaseRepos = await fetchShowcaseRepos();

    if (showcaseRepos.length === 0) {
      console.warn("No repositories found with 'showcase' topic");
      return [];
    }

    // Manual URL overrides for repos with incorrect homepage URLs
    const urlOverrides: Record<string, string> = {
      "daniel-meyer-repo": "https://daniel-meyer-repo.vercel.app/",
      "naturalization-test": "https://german-naturalization-test.vercel.app/",
      "github-repos-finder": "https://github-repos-finder.vercel.app/",
    };

    // Fetch languages for each repository in parallel
    const projectsWithLanguages = await Promise.all(
      showcaseRepos.map(async (repo, index) => {
        // Use local images (auto-generated or manual)
        const localImage = getImageForRepo(repo.name);

        // Use override URL if exists, otherwise use homepage, fallback to repo URL
        const siteUrl = urlOverrides[repo.name] || repo.homepage || repo.html_url;

        // Fetch all languages for the repo
        const languages = await fetchRepoLanguages(repo.languages_url);

        return {
          id: typeof repo.id === 'string' ? index + 1 : Number(repo.id),
          title: repo.name
            .split(/[-_]/)
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" "),
          description: repo.description || undefined,
          link: siteUrl,
          repoLink: repo.html_url,
          language: repo.language || undefined,
          languages: languages.length > 0 ? languages : undefined,
          stars: repo.stargazers_count,
          img: localImage,
        };
      })
    );

    return projectsWithLanguages;
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return [];
  }
}

/**
 * Alternative: Fetch repos with GraphQL API (requires token)
 * Uncomment and use this if you want to add a GitHub token
 */
/*
export async function fetchPinnedReposWithGraphQL(
  token: string
): Promise<Project[]> {
  const query = `
    query {
      user(login: "${GITHUB_USERNAME}") {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              id
              name
              description
              url
              homepageUrl
              primaryLanguage {
                name
              }
              stargazerCount
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch(GITHUB_GRAPHQL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      throw new Error(`GitHub GraphQL API error: ${response.status}`);
    }

    const data = await response.json();
    const repos = data.data.user.pinnedItems.nodes;

    return repos.map((repo: any, index: number) => ({
      id: repo.id,
      title: repo.name
        .split("-")
        .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
      description: repo.description || undefined,
      link: repo.homepageUrl || repo.url,
      language: repo.primaryLanguage?.name || undefined,
      stars: repo.stargazerCount,
    }));
  } catch (error) {
    console.error("Error fetching pinned repos:", error);
    return [];
  }
}
*/
