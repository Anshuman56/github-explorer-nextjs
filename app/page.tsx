export default async function Home() {
  const res = await fetch("https://api.github.com/users/Anshuman56");
  const user = await res.json();
  return <h1>Hello, {user.name}</h1>;
}
