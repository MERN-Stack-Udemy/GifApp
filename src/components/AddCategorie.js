import React, { useState } from "react";
import PropTypes from 'prop-types'



export const AddCategorie = ( {setCategories} ) => {

  const [inputvalue, setInputvalue] = useState("hola mundo");

  const handleChange = (e) => {
    setInputvalue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if()
    setCategories(categories => [...categories, inputvalue])
  }

  return (
    <>
    <h3> {inputvalue} </h3>
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={inputvalue} 
        onChange={handleChange} />
    </form>
  
    </>
  );

};
