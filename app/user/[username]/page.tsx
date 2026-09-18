import { GitHubRepo, GitHubUser } from "@/app/type";
import { notFound } from "next/navigation";
import Image from "next/image";

type Props = { params: Promise<{ username: string }> };
export default async function UserPage({ params }: Props) {
  const { username } = await params;

  const userRes = await fetch(`https://api.github.com/users/${username}`);
  const reposRes = await fetch(
    `https://api.github.com/users/${username}/repos`,
  );
  const user: GitHubUser = await userRes.json();
  const repos: GitHubRepo[] = await reposRes.json();
  if (!userRes.ok) {
    if (userRes.status === 404) notFound();
  }

  console.log(user);
  console.log(repos);
  return (
    <div>
      <div>
        <h1>{user.name}</h1>
        <h2>{user.bio}</h2>
        <Image
          src={user.avatar_url}
          alt="GitHub User"
          width={200}
          height={200}
          loading="eager"
        />
        <p>{user.followers}</p>
      </div>
      {Array.isArray(repos) &&
        repos.map((item) => (
          <div className="border" key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{item.language}</p>
          </div>
        ))}
    </div>
  );
}

export async function generateMetadata({ params }: Props) {
  const { username } = await params;
  return {
    title: `${username} on GitHub Explorer`,
    description: `View ${username}'s profile and repositories`,
  };
}
