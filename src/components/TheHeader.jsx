import { useState } from "react";
import styled from "@emotion/styled";
import { searchMovies } from "../api/tmdbApi";

export const TheHeader = ({ setMovies, setTitle, setError }) => {
  const [query, setQuery] = useState("");

  async function handleSearch(q) {
    setError("");
    setTitle("검색 결과");
    try {
      const data = await searchMovies(q);
      if (!data || data.length === 0) {
        setMovies([]);
        setError("검색 결과가 없습니다.");
        setTitle("");
        return;
      }
      setMovies(data);
    } catch (e) {
      setError(e.message);
    }
  }

  return (
    <Header>
      <Title>MovieFinder</Title>
      <SearchControls>
        <SearchInput
          placeholder="영화 제목을 입력하세요"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch(query);
          }}
        />
        <SearchButton onClick={() => handleSearch(query)}>검색</SearchButton>
      </SearchControls>
    </Header>
  );
};

const Header = styled.header`
  height: 8vh;
  background-color: #252525;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 20px;
`;

const SearchControls = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const SearchInput = styled.input`
  padding: 12px;
  font-size: 16px;
  border-radius: 6px;
  border: 1px solid #ddd;
`;

const SearchButton = styled.button`
  padding: 12px 14px;
  background: #e50914;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;
