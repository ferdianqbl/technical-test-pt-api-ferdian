"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ListCard from "@/components/ui/list-card";

import {
  AnimeTopResponse,
  AnimeTopResponseData,
  getAllData,
} from "@/lib/api/query";
import { useEffect, useState } from "react";

const ListAnime = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState<AnimeTopResponseData[] | []>([]);

  const fetchData = async () => {
    const res = await getAllData({ page, limit: 10 });
    setData(res?.data || []);
  };

  useEffect(() => {
    fetchData();
  }, [page]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {data?.map((item) => (
        <ListCard data={item} key={item.mal_id} />
      ))}
    </div>
  );
};

export default ListAnime;
