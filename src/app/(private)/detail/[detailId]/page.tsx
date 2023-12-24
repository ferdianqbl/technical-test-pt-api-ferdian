"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { AnimeTopResponseData, getDataById } from "@/lib/api/query";
import Image from "next/image";
import { useEffect, useState } from "react";

const Page = ({ params }: { params: any }) => {
  const [data, setData] = useState<AnimeTopResponseData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const getData = async () => {
    setLoading(true);
    const res = await getDataById(params.detailId);
    setData(res?.data || null);
    setLoading(false);
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading)
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <Skeleton className="h-screen max-h-[200px] w-full rounded-md" />
        <Skeleton className="h-screen max-h-[200px] w-full rounded-md" />
        <Skeleton className="h-screen max-h-[200px] w-full rounded-md" />
        <Skeleton className="h-screen max-h-[200px] w-full rounded-md" />
      </div>
    );
  else
    return (
      <div className="flex justify-center gap-3 w-full max-w-[1000px] mx-auto flex-wrap md:flex-nowrap">
        <div className="h-full w-full md:w-1/4">
          <Image
            width={200}
            height={400}
            src={data?.images?.jpg.image_url || ""}
            alt="detail-image"
            className="rounded-md mx-auto sm:w-2/4 h-full md:w-full object-cover object-center"
          />
        </div>
        <div className="flex flex-col gap-4 w-full md:w-3/4">
          <p className="text-2xl text-slate-900 font-bold">{data?.title}</p>
          <p className="space-x-1">
            <span className="p-1 text-black bg-yellow-400 rounded-md">
              {data?.year}
            </span>{" "}
            <span className="p-1 text-black bg-blue-400 rounded-md">
              {data?.score}
            </span>
          </p>
          <p className="text-gray-400">{data?.synopsis}</p>
          <p></p>
        </div>
      </div>
    );
};

export default Page;
