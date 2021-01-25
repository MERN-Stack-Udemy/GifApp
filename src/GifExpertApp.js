import React, { useState } from 'react'
import { AddCategorie } from './components/AddCategorie';
import { GifsGrid } from './components/GifsGrid';

const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch'])
  
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategorie 
        setCategories = { setCategories }
      />

      <hr/>

      <ol>{
        categories.map( ( categorie ) => (
          // return <li key={categorie}> {categorie}</li>
          <GifsGrid 
            key={categorie}
            // class
            category= { categorie }
          />
        ))
      }</ol>
      
    </>
  )

}
export default GifExpertApp;
