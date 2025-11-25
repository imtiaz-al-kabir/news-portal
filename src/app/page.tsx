import Banner from "../components/shared/Banner";
import NewsCard from "../components/shared/NewsCard";
import { NewsItem } from "../types/news";

const Home = async () => {
  const data = await fetch("http://localhost:4000/news/sort");
  const news = await data.json();
 
  return (
    <div>
      <Banner />
      <div className="my-12">
        <h2 className="text-2xl font-bold mb-8">Latest News</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {
            news.map((item:NewsItem)=>(<NewsCard key={item._id} item={item} />))
          }
          
        </div>
      </div>
    </div>
  );
};
export default Home;
