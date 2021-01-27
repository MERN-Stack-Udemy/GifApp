import React from 'react'

import { useFetchGifs } from '../Hooks/useFetchGifs'
import { GifsGridItem } from './GifsGridItem';

export const GifsGrid = ({ category }) => {

  const {data, loading} = useFetchGifs(category);
  console.log({data, loading})
  return (
    <>
      <h3  className= "animate__jello">{category}</h3>
      { loading && <p>Loading....</p>}
      <div className="card-grid">
        {data.map( (img) => (
          <GifsGridItem 
            key = {img.id} 
            {...img}
          />
        ))}
        
      </div>
    </>
  )
}
