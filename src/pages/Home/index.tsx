import { useEffect, useState } from "react";

import HearthIcon from "assets/images/hearth.svg";
import { getTopHeadlines, News } from "services/news.service";
import { formatDataBr } from "util/data";
import "./styles.css";
import Spinner from "component/shared/spinner";
import Pagination from "component/shared/pagination";
import { pageSize } from "util/constants";
import Header from "component/common/Home/header";
import NewsCard from "component/common/Home/newsCard";

function App() {
  const [loading, setloading] = useState(true);
  const [data, setData] = useState<News[]>([]);
  const [page, setPage] = useState(0);
  const [totalRecords, setTotalRecords] = useState(0);
  const [searchInput, setSearchInput] = useState<string>();

  const loadData = async (query?: string) => {
    setloading(true);
    const response = await getTopHeadlines(query, page);

    if (response.status === "ok") {
      setData(response.articles);
      setTotalRecords(response.totalResults);
    }
    setloading(false);
  };

  const handleSearch = () => {
    loadData(searchInput);
  };

  useEffect(() => {
    loadData();
  }, [, page]);

  return (
    <div className="container">
      <Header
        value={searchInput}
        storeValue={setSearchInput}
        search={handleSearch}
      />
      <main className="content">
        {loading && <Spinner loading={loading} />}
        {!loading && data.length === 0 && (
          <div className="noDataFound">
            Não encontramos nenhum artigo com essa palavra chave
          </div>
        )}
        {data.map((news) => (
          <NewsCard key={news.url} news={news} />
        ))}
        {totalRecords > pageSize && (
          <Pagination
            actualPage={page}
            totalRecords={totalRecords}
            handleClick={setPage}
          />
        )}
      </main>
    </div>
  );
}

export default App;
