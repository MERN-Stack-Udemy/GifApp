import React, { useEffect, useState } from 'react'
import { getGifs } from '../Helpers/getGifs';
import { GifsGridItem } from './GifsGridItem';

export const GifsGrid = ({ categorie }) => {

  const [images, setImages] = useState([]);

  useEffect(() => {

    getGifs(categorie)
    .then( setImages )

  }, [categorie] );

 


  return (
    <>
      <h3>{categorie}</h3>
      <div className="card-grid">
        {images.map( (img) => (
          <GifsGridItem 
            key = {img.id} 
            {...img}
          />
        ))}
        
      </div>
    </>
  )
}
