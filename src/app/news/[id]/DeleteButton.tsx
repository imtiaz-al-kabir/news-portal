"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";

export default function DeleteButton({ newsId }: { newsId: string }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    if (
      !confirm(
        "Are you sure you want to delete this news? This cannot be undone."
      )
    ) {
      return;
    }

    startTransition(async () => {
      const res = await fetch(`https://news-portal-server-liart.vercel.app/news/${newsId}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.push("/news");
        router.refresh();
      } else {
        alert("Failed to delete news. Please try again.");
      }
    });
  };

  return (
    <button
      onClick={handleDelete}
      disabled={isPending}
      className={`px-6 py-3 rounded-lg font-medium transition ${
        isPending
          ? "bg-red-400 cursor-not-allowed"
          : "bg-red-600 hover:bg-red-700 text-white"
      }`}
    >
      {isPending ? "Deleting..." : "Delete News"}
    </button>
  );
}
