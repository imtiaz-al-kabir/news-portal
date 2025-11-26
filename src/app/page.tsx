import Link from "next/link";
import Banner from "../components/shared/Banner";
import NewsCard from "../components/shared/NewsCard";
import NewsLetter from "../components/shared/NewsLetter";
import { NewsItem } from "../types/news";

const Home = async () => {
  const data = await fetch("https://news-portal-server-liart.vercel.app/news/sort");
  const news = await data.json();

  return (
    <div>
      <Banner />
      <div className="my-12">
        <div className="flex justify-between mb-8 px-5">
          <h2 className="text-2xl font-bold ">Latest News</h2>
          <Link href="/news" className=" px-4 py-2 rounded-4xl bg-black text-white">
            sell all
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-5">
          {news.map((item: NewsItem) => (
            <NewsCard key={item._id} item={item} />
          ))}
        </div>
      </div>
      <div>
        <NewsLetter />
      </div>
    </div>
  );
};
export default Home;
