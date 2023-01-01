import { pageSize } from "util/constants";
import { api } from "./api";

export interface News {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: Date;
  content: string;
}
export interface DataAPI {
  status: string;
  totalResults: number;
  articles: News[];
}
export const getEverythingNews = async (
  query: string = "",
  page?: number
): Promise<DataAPI> => {
  const queryParsed = query ? `&q=${query}` : "";
  const pageParsed = page ? `&page=${page + 1}` : "";
  const pageSizeParsed = pageSize ? `&pageSize=${pageSize}` : "";

  const url = `everything?${queryParsed}${pageParsed}${pageSizeParsed}`;
  return await api.get(url);
};

export const getTopHeadlines = async (
  query?: string,
  page?: number
): Promise<DataAPI> => {
  const queryParsed = query ? `&q=${query}` : "";
  const pageParsed = page ? `&page=${page + 1}` : "";
  const pageSizeParsed = pageSize ? `&pageSize=${pageSize}` : "";

  const url = `top-headlines?country=br${queryParsed}${pageParsed}${pageSizeParsed}`;
  return await api.get(url);
};
