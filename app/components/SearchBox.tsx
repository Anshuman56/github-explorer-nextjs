"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBox() {
  const [userName, setUserName] = useState<string>("");
  const router = useRouter();
  function handleSearch() {
    router.push(`/user/${userName}`);
  }
  return (
    <div className="max-w-500  mt-3 mx-auto">
      <h1 className="font-bold text-2xl mb-3">
        Enter any GitHub username to explore their profile and repos.
      </h1>
      <div className="flex gap-2 justify-center">
        <input
          type="text"
          value={userName}
          className="border rounded px-2"
          onChange={(e) => setUserName(e.target.value)}
        />
        <button
          className="bg-blue-400 px-2 rounded text-white"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
}
