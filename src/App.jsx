import { useState } from "react";
import { Global } from "@emotion/react";
import styled from "@emotion/styled";
import { globalStyles } from "./styles/globalStyle";
import { TheHeader } from "./components/TheHeader";
import { MainPage } from "./components/MainPage";
import { Top5Movies } from "./api/tmdbApi";
import { useEffect } from "react";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const top = await Top5Movies();
        setMovies(top);
        setTitle("인기 Top 5 영화");
      } catch (e) {
        console.error("영화 데이터 로드 오류:", e);
        setError(e.message);
      }
    };
    fetchMovies();
  }, []);

  return (
    <Container>
      <Global styles={globalStyles} />
      <TheHeader
        setMovies={setMovies}
        setTitle={setTitle}
        setError={setError}
      />
      <MainPage movies={movies} title={title} error={error} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
