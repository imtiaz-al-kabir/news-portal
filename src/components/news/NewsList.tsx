"use client";

import { useEffect, useState } from "react";
import { getNews } from "../../lib/getNews";
import { NewsItem } from "../../types/news";
import NewsCard from "../shared/NewsCard";
import CategoryFilter from "./CategoryFilter";
import SearchBar from "./SearchBar";

const NewsList = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  useEffect(() => {
    const fetchNews = async () => {
      const data = await getNews(category, search);
      setNews(data);
    };
    fetchNews();
  }, [category, search]);
  return (
    <div>
      <div className="flex flex-col py-4 sm:flex-row justify-between items-center">
        <SearchBar onSearch={setSearch} />
        <CategoryFilter onCategoryChange={setCategory
        } />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-5">
        {news.map((item: NewsItem) => (
          <NewsCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default NewsList;
