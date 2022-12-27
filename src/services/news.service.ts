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
export const getEverythingNews = async (query?: string): Promise<DataAPI> => {
  const url = "everything?" + query ? `q=${query}` : "";
  return await api.get(url);
};

export const getTopHeadlines = async (query?: string): Promise<DataAPI> => {
  const q = query ? `&q=${query}` : "";
  const url = `top-headlines?country=br${q}`;
  return await api.get(url);
};
