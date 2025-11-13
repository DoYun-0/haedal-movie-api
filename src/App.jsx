import React, { useEffect, useState } from "react";
import { Global } from "@emotion/react";
import styled from "@emotion/styled";
import { Top5Movies } from "./api/tmdbApi";
import { globalStyles } from "./styles/globalStyle";
import { TheHeader } from "./components/TheHeader";
import { MainPage } from "./components/MainPage";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const top = await Top5Movies();
        setMovies(top);
        setTitle("인기 Top 5 영화");
      } catch (e) {
        setError(e.message);
      }
    })();
  }, []);

  return (
    <Container>
      <Global styles={globalStyles} />
      <TheHeader setMovies={setMovies} setTitle={setTitle} setError={setError} />
      <MainPage movies={movies} title={title} error={error} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
