import React from 'react';
import PropTypes from 'prop-types';

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

GifsGridItem.propTypes = {
  url : PropTypes.string.isRequired,
  title : PropTypes.string.isRequired,
}
