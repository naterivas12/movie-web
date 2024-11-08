import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export const OnePiceMoviePages = () => {

  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://movie-api-production-d170.up.railway.app/list_movies')
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const redirectToCharacters = (malId) => {
    navigate(`/characters/${malId}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      style={{ padding: '2rem' }}
    >
      <motion.h1 
      className="d-flex justify-content-center text-white"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >Lista de películas de One Piece</motion.h1>
      <div className="row">
        {movies.map((movie) => (
          <motion.div
            key={movie.mal_id}
            className="col-md-3 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="card"
              onClick={() => redirectToCharacters(movie.mal_id)}
              whileHover={{ scale: 1.1 }}
            >
              <motion.img
                src={movie.images}
                className="card-img-top"
                alt={movie.title}
                style={{ objectFit: 'cover', height: '250px', width: '100%' }}
              />
              <motion.div
                className="card-body d-flex align-items-center"
                style={{ height: '88px' }}
              >
                <h5
                  className="card-title"
                  style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}
                >
                  {movie.title}
                </h5>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

}
