import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

export const CharactersPages = () => {
  
  const { mal_id } = useParams();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(`https://movie-api-production-d170.up.railway.app/characters/${mal_id}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data);
      })
      .catch((error) => console.error(error));
  }, [mal_id]);

  const redirectToPerson = (malId) => {
    navigate(`/person/${malId}`);
  };


  return (

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      style={{ padding: '2rem' }}
      className='onepice-app'
    >
      <motion.h1
      className="d-flex justify-content-center text-white"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >Lista de Personajes</motion.h1>
      <div  className="row">
        {characters.map((character) => (
          <motion.div
            key={character.mal_id}
            className="col-md-2 col-sm-4 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              style={{backdropFilter: 'blur(10px)',}}
              className="card"
              onClick={() => redirectToPerson(character.mal_id)}
              whileHover={{ scale: 1.1 }}
            >
              <motion.img
                src={character.image_url}
                className="card-img-top"
                alt={character.name}
                style={{ objectFit: 'contain', maxHeight: '250px', width: '100%' }}
              />
              <motion.div
                className="card-body d-flex align-items-center justify-content-center"
                style={{ height: '88px' }}
              >
                <h5
                  className="card-title"
                  style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}
                >
                  {character.name}
                </h5>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
      <div className='d-flex justify-content-end'
      >

        <motion.button 
          className="box btn btn-primary"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          onClick={() => navigate('/')}
          >Regresar al Inicio</motion.button>
      </div>

    </motion.div>

  )
}


