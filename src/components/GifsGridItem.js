import React from 'react'

export const GifsGridItem = ( {image, title} ) => {
  
  return (
    <div className="card animate__bounceIn">
      <img 
        src={image.url}
        alt= {title}
      />
      <p>{title}</p>
    </div>
  )
}
