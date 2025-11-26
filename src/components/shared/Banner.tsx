"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface NewsItem {
  _id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
}

export default function NewsCardCarousel() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch news from API
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch("https://news-portal-server-liart.vercel.app/news");
        const data = await res.json();
        setNews(data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    fetchNews();
  }, []);

  useEffect(() => {
    if (news.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % news.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [news]);

  if (news.length === 0) {
    return <p className="p-5 text-center">Loading news...</p>;
  }

  const slide = news[currentIndex];

  return (
    <div className="max-w-7xl  mx-auto p-6 relative">
      {/* Card */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col transition-all duration-500">
        <div className="relative h-96 w-full">
          <Image
            src={slide.imageUrl}
            alt={slide.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4 flex flex-col">
          <h4 className="text-sm text-gray-500">{slide.category}</h4>
          <h2 className="text-xl font-bold mt-1">{slide.title}</h2>
          <p className="text-gray-700 mt-2 flex-1">{slide.description}</p>
          <Link
            href="/news"
            className="mt-4 self-start bg-black text-white px-5 py-3 rounded-2xl"
          >
            Show More
          </Link>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 py-4">
        {news.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-3 w-3 rounded-full ${
              i === currentIndex ? "bg-blue-600" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
