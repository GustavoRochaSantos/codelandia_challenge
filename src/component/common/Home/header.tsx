import React from "react";
import SearchIcon from "assets/images/search.svg";

interface Params {
  value: string | undefined;
  storeValue: (value: string) => void;
  search: () => void;
}

const Header = ({ value, storeValue, search }: Params) => {
  const handleHitEnter = (e: any) => {
    if (e.key === "Enter") search();
  };

  const handleOnChange = (e: any) => {
    storeValue(e.target.value);
    if (e.target.value === "") search();
  };

  return (
    <header>
      <div className="menu">
        <a href="#">Codelândia Desafio 1 - Top News</a>
        <a href="#">blog</a>
      </div>
      <div className="wrapperInput">
        <button className="searchButton" onClick={search}>
          <img src={SearchIcon} />
        </button>

        <input
          className="input"
          placeholder="Pesquisar no blog"
          defaultValue={value}
          onChange={handleOnChange}
          onKeyDown={handleHitEnter}
        />
      </div>
    </header>
  );
};

export default Header;
