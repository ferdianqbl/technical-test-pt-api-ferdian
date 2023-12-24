import { AnimeTopResponseData } from "@/lib/api/query";
import Image from "next/image";
import React from "react";
import Link from "next/link";

type ListCardProps = { data: AnimeTopResponseData };
const ListCard: React.FC<ListCardProps> = ({ data }) => {
  return (
    <div className="relative rounded-md overflow-hidden card transition duration-500 max-h-[300px]">
      <Link href={`/detail/${data.mal_id}`}>
        <div className="relative overflow-hidden w-full h-full poster before:bottom-[-100px] sm:before:bottom-[-180px]">
          {data.images && (
            <Image
              src={data.images?.jpg?.image_url || ""}
              width={300}
              height={400}
              alt="anime-img"
              priority
              className="h-full w-full object-cover object-center transition duration-500 ease-in-out"
            />
          )}
        </div>
        <div className="absolute bottom-0 left-0 right-0 transition duration-500 z-10 details p-4 flex flex-col gap-2">
          <h1 className="text-slate-200 font-bold whitespace-nowrap overflow-clip text-xl">
            {data.title}
          </h1>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-wrap gap-1">
              {data.year && (
                <span className="text-slate-900 rounded-md p-1 bg-yellow-400">
                  {data.year}
                </span>
              )}
              {data.score && (
                <span className="text-slate-200 rounded-md p-1 border">
                  {data.score}
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ListCard;
