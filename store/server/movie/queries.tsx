import { authJsonToken, axiosInstance } from "@/store";
import { useQuery } from "@tanstack/react-query";
import { NowPlayingProps, popularProps, trendProps } from "./typed";

const nowPlaying = async (): Promise<NowPlayingProps> => {
  const { data } = await axiosInstance.get(`movie/now_playing`, {
    headers: authJsonToken(),
  });
  return data;
};

export const useNowPlaying = () => {
  return useQuery({
    queryKey: ["now-playing"],
    queryFn: () => nowPlaying(),
  });
};

//trending
const trending = async (): Promise<trendProps> => {
  const { data } = await axiosInstance.get(`trending/all/day`, {
    headers: authJsonToken(),
  });
  return data;
};

export const useTrending = () => {
  return useQuery({
    queryKey: ["trending"],
    queryFn: () => trending(),
  });
};

//latest
const popular = async ({ type }: { type: string }): Promise<popularProps> => {
  const { data } = await axiosInstance.get(`${type}/popular`, {
    headers: authJsonToken(),
  });
  return data;
};

export const usePopular = ({ type }: { type: string }) => {
  return useQuery({
    queryKey: ["latest", type],
    queryFn: () => popular({ type }),
  });
};
