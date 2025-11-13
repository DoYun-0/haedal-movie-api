import styled from "@emotion/styled";

export const MovieCard = ({ movie }) => {
  return (
    <MovieCardWrap id={movie.id}>
      <Img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <Title>{movie.title}</Title>
      <Info>평점: {movie.vote_average}</Info>
      <Info>영화 설명: {movie.overview}</Info>
    </MovieCardWrap>
  );
};

const MovieCardWrap = styled.div`
  background: white;
  border-radius: 10px;
  padding: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const Img = styled.img`
  width: 100%;
  border-radius: 6px;
`;

const Title = styled.h3`
  margin: 10px 0 6px;
  font-size: 18px;
`;

const Info = styled.p`
  margin: 6px 0;
  font-size: 14px;
  color: #333;
`;
