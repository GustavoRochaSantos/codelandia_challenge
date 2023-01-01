import React from "react";
import { News } from "services/news.service";
import { formatDataBr } from "util/data";
import HearthIcon from "assets/images/hearth.svg";

interface Params {
  news: News;
}
const NewsCard = ({ news }: Params) => {
  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="card" key={news.url}>
      <div className="wrapperCardTitle">
        <div className="cardDate">{formatDataBr(news.publishedAt)}</div>
        <img src={HearthIcon} />
      </div>
      <div className="cardTitle">{news.title}</div>
      <div className="cardText">{news.description}</div>
      <div className="flex-right">
        <button className="btn-primary" onClick={() => handleClick(news.url)}>
          Ver na integra
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
