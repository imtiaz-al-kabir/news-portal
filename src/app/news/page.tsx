import NewsCard from "../../components/shared/NewsCard";
import { NewsItem } from "../../types/news";

const NewsPage = async () => {
  const data = await fetch("http://localhost:4000/news");
  const news = await data.json();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">
        All News<span className="text-sm">({news.length})</span>{" "}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {news.map((item: NewsItem) => (
          <NewsCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
