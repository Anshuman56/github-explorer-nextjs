"use client";

import Link from "next/link";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <p>{error.message}</p>

      <button
        onClick={() => reset()}
        className="bg-blue-400 px-3 py-1 mt-3 text-white rounded"
      >
        Try Again
      </button>
    </div>
  );
}
