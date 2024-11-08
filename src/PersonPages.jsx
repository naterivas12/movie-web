
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

export const PersonPages = () => {
  const { mal_id } = useParams();
  const [personData, setPersonData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://movie-api-production-d170.up.railway.app/characters/full/${mal_id}`)
      .then((response) => response.json())
      .then((data) => {
        setPersonData(data);
      })
      .catch((error) => console.error(error));
  }, [mal_id]);

  return (
    <div className="p-5">
 
    <div className="row">
      <motion.div className="col-md-4 d-flex justify-content-center"
       initial={{ opacity: 0, scale: 0.8 }}
       animate={{ opacity: 1, scale: 1 }}
       exit={{ opacity: 0, scale: 0.8 }}
       transition={{ duration: 0.5 }}>
        <motion.img
          src={personData.image_url}
          alt={personData.name}
          style={{ objectFit: 'cover', maxWidth: '100%', height: 'auto' }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        />
      </motion.div>
      <div className="col-md-6">
      <motion.h1
      style={{backdropFilter: 'blur(10px)',}}
      className="d-flex justify-content-center text-white"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      Detalles del Personaje: {personData.name}
    </motion.h1>
        <motion.h2
        style={{backdropFilter: 'blur(10px)',}}
          className="text-white"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          {personData.name}
        </motion.h2>
        <motion.h4
        style={{backdropFilter: 'blur(10px)',}}
          className="text-white"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          {personData.name_kanji}
        </motion.h4>
        <motion.p
        style={{backdropFilter: 'blur(10px)',}}
          className="text-white"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          {personData.about}
        </motion.p>
        
        <motion.button 
        className="box btn btn-primary"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
         onClick={() => navigate('/')}
        >Regresar al Inicio</motion.button>
      </div>
    </div>
  </div>
  )
}
