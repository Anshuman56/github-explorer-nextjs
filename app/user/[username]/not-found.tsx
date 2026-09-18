import Link from "next/link";
export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="font-bold text-2xl ">Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className="bg-blue-400 px-3 py-1 mt-3 text-white rounded" href="/">
        Return Home
      </Link>
    </div>
  );
}
