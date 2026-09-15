import { GitHubRepo, GitHubUser } from "@/app/type";

type Props = { params: Promise<{ username: string }> };
export default async function UserPage({ params }: Props) {
  const { username } = await params;

  const userRes = await fetch(`https://api.github.com/users/${username}`);
  const reposRes = await fetch(
    `https://api.github.com/users/${username}/repos`,
  );
  const user: GitHubUser = await userRes.json();
  const repos: GitHubRepo[] = await reposRes.json();
  console.log(user);
  console.log(repos);
  return (
    <div>
      <div>
        <h1>{user.name}</h1>
        <h2>{user.bio}</h2>
        <img src={user.avatar_url} alt="" />
        <p>{user.followers}</p>
      </div>
      {repos.map((item) => (
        <div className="border" key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p>{item.language}</p>
        </div>
      ))}
    </div>
  );
}
