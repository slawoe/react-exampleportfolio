import { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { MovieState } from "../movieState";
import Loading from "../components/Loading";
import Award from "../components/Award";
import ImageDisplay from "../components/ImageDisplay";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

function MovieDetail() {
  const history = useHistory();
  const url = history.location.pathname;
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function showMovieDetails() {
      try {
        const currentMovie = movies.filter(
          (stateMovie) => stateMovie.url === url
        );
        await setMovie(currentMovie[0]);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    showMovieDetails();
  }, [movies, url]);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      {movie && (
        <Details
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <Headline>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="movie" />
          </Headline>
          <Awards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Awards>
          <ImageDisplay img={movie.secondaryImg} />
        </Details>
      )}
    </>
  );
}

const Details = styled(motion.div)`
  color: white;
`;

const Headline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`;

export default MovieDetail;
