import styled from "@emotion/styled";
import { MovieCard } from "./MovieCard";

export const MainPage = ({ movies, title, error }) => {
  return (
    <Main>
      <Title>{title}</Title>
      <ErrorMessage>{error}</ErrorMessage>
      <Grid>
        {movies.map((m) => (
          <MovieCard key={m.id} movie={m} />
        ))}
      </Grid>
    </Main>
  );
};

const Main = styled.main`
  padding: 10px;
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4f4f4;
`;

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 50px;
  width: 100%;
  max-width: 2000px;
  margin-top: 16px;

  @media (max-width: 1600px) {
    grid-template-columns: repeat(4, minmax(180px, 1fr));
  }
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, minmax(180px, 1fr));
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, minmax(180px, 1fr));
  }
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin-top: 24px;
  margin-bottom: 0;
`;

const ErrorMessage = styled.p`
  font-size: 20px;
  color: #c0392b;
  font-weight: 700;
`;
