import NewsList from "../../components/news/NewsList";

const NewsPage = async () => {
  const data = await fetch("https://news-portal-server-liart.vercel.app/news");
  const news = await data.json();
  return (
    <div>
      <h1 className="text-2xl font-bold my-8">
        All News<span className="text-sm">({news.length})</span>{" "}
      </h1>

      <NewsList />
    </div>
  );
};

export default NewsPage;
