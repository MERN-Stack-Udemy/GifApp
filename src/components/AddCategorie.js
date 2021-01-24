import React, { useState } from "react";
import PropTypes from 'prop-types'


export const AddCategorie = ( {setCategories} ) => {

  const [inputvalue, setInputvalue] = useState(''); // ''

  const handleChange = (e) => {
    setInputvalue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputvalue.trim().length > 2){
      setCategories(categories => [...categories, inputvalue])
      setInputvalue( "" );
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type = "text" 
        value = {inputvalue} 
        onChange = {handleChange} />
    </form>
  );

};

AddCategorie.propTypes = {
  setCategories : PropTypes.func.isRequired,
}
