import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';

export const GiftExpertApp = () => {

  const [categories, setCategories] = useState(['Messi']);

  return (
    <>
      <h1>GiftExpertApp</h1>
      <AddCategory setCategories={setCategories} />
      <hr/>


      <ol>
        {
          categories.map(category => (
            <GiftGrid 
              key = {category}
              category = {category}/>
          ))
        }
      </ol>
    </>
  )
}
