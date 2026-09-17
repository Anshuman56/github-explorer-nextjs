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
    <div>
      <p>{error.message}</p>

      <button onClick={() => reset()}>Try Again</button>

      <Link href="/">Return Home</Link>
    </div>
  );
}
