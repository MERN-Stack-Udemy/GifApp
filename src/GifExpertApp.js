import React, { useState } from 'react'
import { AddCategorie } from './components/AddCategorie';

const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball'])

  const handleAdd = (e) => {
    // setCategories([ ...categories, 'X-Man' ]);
    setCategories( cat => [...cat, 'X-Man' ]);
  }
  
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategorie 
        setCategories = { setCategories }
      />

      <hr/>

      <ol>
        {
          categories.map( ( categorie ) => {
            return <li key={categorie}> {categorie}</li>
          })
        }
      </ol>

    </>
  )

}
export default GifExpertApp;
