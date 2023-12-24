const URL = `https://api.jikan.moe/v4`;

export type AnimeTopResponse = {
  pagination: AnimeTopResponsePagination | undefined;
  data: AnimeTopResponseData[] | [];
};

export type AnimeTopResponsePagination = {
  last_visible_page: number | undefined;
  has_next_page: boolean;
  current_page: number | undefined;
  items: {
    count: number | undefined;
    total: number | undefined;
    per_page: number | undefined;
  };
};

export type AnimeTopResponseData = {
  mal_id: number;
  title: string;
  images:
    | {
        jpg: {
          image_url: string | undefined;
          small_image_url: string | undefined;
          large_image_url: string | undefined;
        };
      }
    | undefined;
  score: number;
  synopsis: string;
  year: number;
};

type getAllDataProps = {
  page: number | undefined;
  limit: number | undefined;
};

export const getAllData = async ({
  limit,
  page,
}: getAllDataProps): Promise<AnimeTopResponse> => {
  try {
    const response = await fetch(
      `${URL}/top/anime?page=${page}&limit=${limit}`
    );
    const data: AnimeTopResponse = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return { data: [], pagination: undefined };
  }
};

export const getDataById = async (id: number) => {
  try {
    const response = await fetch(`${URL}/anime/${id}/full`);
    const data: { data: AnimeTopResponseData } = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return { data: null };
  }
};
