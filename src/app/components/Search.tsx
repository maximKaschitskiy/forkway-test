import { SearchProps } from "../types";
import SearchWrapper from "./blocks/SearchWrapper";
import SearchBar from "./blocks/SearchBar";
import SearchIcon from "./blocks/SearchIcon";
import SearchBarWrapper from "./blocks/SearchBarWrapper";

const Search = ({ search, setSearch }: SearchProps) => {

  return (
    <SearchWrapper>
      <SearchBarWrapper>
        <SearchBar
          placeholder={"Search"}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <SearchIcon src="/search.svg"></SearchIcon>
      </SearchBarWrapper>
    </SearchWrapper>
  );
};

export default Search;
