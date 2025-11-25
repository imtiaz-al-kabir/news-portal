import Image from "next/image";
import Link from "next/link";
import { NewsCardProps } from "../../types/news";
import { Button } from "../ui/button";

const NewsCard = ({ item }: NewsCardProps) => {
  return (
    <div className="border p-4 rounded-md shadow-md">
      <Link href={`/news/${item?._id}`}>
        <Image
          src={item.imageUrl}
          width={500}
          height={500}
          alt="image"
          className="mb-5 md:h-56 rounded hover:scale-105 cursor-pointer transition-all duration-200"
        />
        <div>
          <h2 className="text-xl font-semibold my-3">
            {item.title.substring(0, 65)}..
          </h2>
          <p className="mb-4">{item.description.substring(0,90)}..</p>

          <Link href={"/news"}>
            <Button variant="default">Read More</Button>
          </Link>
        </div>
      </Link>
    </div>
  );
};

export default NewsCard;
