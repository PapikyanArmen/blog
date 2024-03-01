import axios from "axios";
import { IBlog } from "@/types";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Accept: "application/json",
  },
});
export const getAllMovies = async () => {
  const response = await axiosInstance.get("/movies");
  return response.data;
};
export const getData = async (start: number | null, limit: number | null) => {
  const response = await axiosInstance.get(`/movies?_page=${start || 1}&_limit=${limit || 10}`);
  return {
    movieList: response.data,
    total: Number(response.headers["x-total-count"]),
  };
};
export const getMovie = async (id: string) => {
  const response = await axiosInstance.get(`/movies/${id}`);
  return response.data;
};
export const addComment = async (
  id: string,
  data: IBlog | null,
  newComment: {
    text: string;
    date: Date;
  }[],
) => {
  const response = await axiosInstance.patch(`/movies/${id}`, {
    comments: [...(data?.comments ?? []), ...newComment],
  });
  return response.data;
};
