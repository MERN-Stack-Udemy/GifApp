import React from 'react'

export const GifsGridItem = ( {url, title} ) => {
  
  return (
    <div className="card animate__bounceIn">
      <img 
        src={url}
        alt= {title}
      />
      <p>{title}</p>
    </div>
  )
}
