import React from 'react'

export const GifsGridItem = ( {image, title} ) => {
  
  return (
    <div className="card">
      <img 
        src={image.url}
        alt= {title}
      />
      <p>{title}</p>
    </div>
  )
}
