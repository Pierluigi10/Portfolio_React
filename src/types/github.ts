export interface GitHubRepository {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  languages_url: string;
  stargazers_count: number;
  topics: string[];
  fork: boolean;
  created_at: string;
  updated_at: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

export interface Project {
  id: number;
  title: string;
  description?: string;
  img?: string;
  link: string;
  repoLink: string;
  language?: string;
  languages?: string[];
  stars?: number;
}
