import NewsList from "../../components/news/NewsList";

const NewsPage = async () => {
  const data = await fetch("http://localhost:4000/news");
  const news = await data.json();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">
        All News<span className="text-sm">({news.length})</span>{" "}
      </h1>

      <div>
        <NewsList />
      </div>
    </div>
  );
};

export default NewsPage;
