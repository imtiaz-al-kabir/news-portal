import Image from "next/image";
import { notFound } from "next/navigation";
import { NewsItem } from "../../../types/news";

import Link from "next/link";
import DeleteButton from "./DeleteButton";

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  const posts: NewsItem[] = await fetch("https://news-portal-server-liart.vercel.app/news", {
    cache: "no-store",
  }).then((res) => res.json());

  return posts.slice(0, 12).map((post) => ({
    id: String(post._id),
  }));
}

export default async function NewsDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const post: NewsItem = await fetch(`https://news-portal-server-liart.vercel.app/news/${id}`, {
    cache: "no-store",
  }).then((res) => (res.ok ? res.json() : null));

  if (!post?._id) {
    notFound();
  }

  return (
    <section className="py-12 px-5">
      <article className="max-w-4xl mx-auto p-6 shadow-md border rounded-lg  ">
        {post.imageUrl && (
          <div className="mb-6">
            <Image
              src={post.imageUrl}
              alt={post.title}
              width={800}
              height={450}
              className="rounded-md object-cover w-full"
              priority
            />
          </div>
        )}

        <div className="my-5">
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <div className="flex flex-wrap justify-between items-center text-sm text-gray-600 mb-4 gap-4">
            <time>
              {new Date(post.published_at).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <p>
              Source: <span className="font-medium">{post.source}</span>
            </p>
          </div>
        </div>

        {post.categories && post.categories.length > 0 && (
          <div className="mb-6 flex flex-wrap gap-2">
            {post.categories.map((category) => (
              <span
                key={category}
                className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full"
              >
                {category}
              </span>
            ))}
          </div>
        )}

        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          {post.snippet}
        </p>
        <p className="text-gray-800 mb-8 leading-relaxed whitespace-pre-wrap">
          {post.description}
        </p>

        {/* This is now a Client Component */}
        <DeleteButton newsId={id} />

        <div className="mt-6">
          <Link href="/news" className="text-blue-600 hover:underline text-sm">
            Back to all news
          </Link>
        </div>
      </article>
    </section>
  );
}
