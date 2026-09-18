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
    <div className="max-w-3xl mx-auto p-4">
      <div className="">
        <div className="flex py-4">
          <Image
            src={user.avatar_url}
            alt="GitHub User"
            width={300}
            height={300}
            className=" rounded-full"
            loading="eager"
          />
          <div className="my-auto">
            <h1 className="px-3 text-2xl font-bold">{user.name}</h1>
            <h2 className="px-3">{user.bio}</h2>
            <p className="px-3 mt-2">Followers {user.followers}</p>
          </div>
        </div>
      </div>
      {Array.isArray(repos) &&
        repos.map((item) => (
          <div className="bg-white border rounded p-4 mb-3" key={item.id}>
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
