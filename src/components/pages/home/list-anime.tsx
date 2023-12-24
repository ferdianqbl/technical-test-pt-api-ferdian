"use client";
import { Button } from "@/components/ui/button";
import ListCard from "@/components/ui/list-card";
import { Skeleton } from "@/components/ui/skeleton";

import {
  AnimeTopResponseData,
  AnimeTopResponsePagination,
  getAllData,
} from "@/lib/api/query";
import { ChevronsUp } from "lucide-react";
import { useEffect, useState } from "react";

const ListAnime = () => {
  const [page, setPage] = useState(1);
  const [paginationData, setPaginationData] =
    useState<AnimeTopResponsePagination | null>(null);
  const [data, setData] = useState<AnimeTopResponseData[] | []>([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const res = await getAllData({
      page,
      limit: 10,
    });
    setData(res?.data || []);
    setPage(res?.pagination?.current_page || 1);
    setPaginationData(res?.pagination || null);
    console.log({ res });
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

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
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <p className="text-sm">
          page {page} of {paginationData?.last_visible_page}
        </p>
        <div className="flex flex-center justify-center gap-2">
          {page >= 1 && (
            <Button variant={"ghost"} onClick={() => setPage(1)}>
              <ChevronsUp className="-rotate-90 w-4 h-4" />
            </Button>
          )}

          {page - 1 >= 1 && (
            <Button variant={"ghost"} onClick={() => setPage(page - 1)}>
              {page - 1}
            </Button>
          )}
          <p className="h-10 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background bg-accent text-accent-foreground">
            {page}
          </p>
          {page + 1 <= paginationData?.last_visible_page! && (
            <Button variant={"ghost"} onClick={() => setPage(page + 1)}>
              {page + 1}
            </Button>
          )}
          {paginationData?.last_visible_page! >= page + 1 && (
            <Button
              variant={"ghost"}
              onClick={() => setPage(paginationData?.last_visible_page || 1)}
            >
              <ChevronsUp className="rotate-90 w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {data?.map((item) => (
          <ListCard data={item} key={item.mal_id} />
        ))}
      </div>
    </div>
  );
};

export default ListAnime;
