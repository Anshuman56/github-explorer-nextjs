export type GitHubUser = {
  login: string;
  name: string | null;
  bio: string | null;
  followers: number;
  following: number;
  public_repos: number;
  avatar_url: string;
};

export type GitHubRepo = {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
  html_url: string;
};
