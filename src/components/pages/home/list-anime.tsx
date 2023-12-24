"use client";
import ListCard from "@/components/ui/list-card";
import { Skeleton } from "@/components/ui/skeleton";
import { AnimeTopResponseData, getAllData } from "@/lib/api/query";
import { useEffect, useState } from "react";

const ListAnime = () => {
  const [data, setData] = useState<AnimeTopResponseData[] | []>([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const res = await getAllData({
      page: 1,
      limit: 8,
    });
    setData(res?.data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {data?.map((item) => (
        <ListCard data={item} key={item.mal_id} />
      ))}
    </div>
  );
};

export default ListAnime;
