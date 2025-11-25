import Image from "next/image";
import { Button } from "../ui/button";

const Banner = () => {
  return (
    <div className="bg-slate-100">
      <div className="p-5 grid grid-cols-1 md:grid-cols-2 items-center gap-3">
        <div>
          <Image
            className="rounded-lg"
            src="https://images.unsplash.com/photo-1599474924187-334a4ae5bd3c?q=80&w=1983&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={500}
            height={500}
            alt="image"
          />
        </div>
        <div>
          <h4 className="text-sm text-gray-700 ">Technology</h4>
          <h2 className="pt-5 text-xl font-bold">
            Panova and Olmos Lose in Beijing Doubles Quarterfinals
          </h2>
          <p className="py-5">
            Russian Alexandra Panova and Mexican Giuliana Olmos were defeated in
            the quarterfinals of the Beijing doubles tournament, with a score of
            4/6, 4/6. The Korea Inter-bank Offered Rates (Koribor) for September
            30 were released, providing key interest rates for financial
            institutions.
          </p>
          <Button variant="default">Read More</Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
