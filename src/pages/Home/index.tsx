import {
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  useEffect,
  useState,
} from "react";
import SearchIcon from "assets/images/search.svg";
import HearthIcon from "assets/images/hearth.svg";
import { getTopHeadlines, News } from "services/news.service";
import { formatDataBr } from "util/data";
import "./styles.css";

function App() {
  const [data, setData] = useState<News[]>([]);
  const [searchInput, setSearchInput] = useState<string>();
  const loadData = async (query?: string) => {
    const response = await getTopHeadlines(query);

    if (response.status === "ok") {
      setData(response.articles);
    }
  };

  const handleSearch = () => {
    loadData(searchInput);
  };

  const handleHitEnter = (e: any) => {
    if (e.key === "Enter") loadData(searchInput);
  };

  const onChangeInputSearch = (e: any) => {
    setSearchInput(e.target.value);
    if (e.target.value === "") loadData();
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="container">
      <header>
        <div className="menu">
          <a href="#">Codelândia</a>
          <a href="#">blog</a>
        </div>
        <div className="wrapperInput">
          <button className="searchButton" onClick={handleSearch}>
            <img src={SearchIcon} />
          </button>

          <input
            className="input"
            placeholder="Pesquisar no blog"
            defaultValue={searchInput}
            onChange={onChangeInputSearch}
            onKeyDown={handleHitEnter}
          />
        </div>
      </header>
      <main className="content">
        {data.length === 0 && (
          <div className="noDataFound">
            Não encontramos nenhum artigo com essa palavra chave
          </div>
        )}
        {data.map((news) => (
          <div className="card" key={news.url}>
            <div className="wrapperCardTitle">
              <div className="cardDate">{formatDataBr(news.publishedAt)}</div>
              <img src={HearthIcon} />
            </div>
            <div className="cardTitle">{news.title}</div>
            <div className="cardText">{news.description}</div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
