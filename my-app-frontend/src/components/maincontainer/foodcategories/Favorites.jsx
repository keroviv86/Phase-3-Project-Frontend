import React, { useState } from 'react'
import FavoriteList from './FavoriteListItem'

function Favorites({cartItems}) {
    const favoritesListItems = cartItems.map((cartFood)=>(
      <FavoriteList
      key= {cartFood.id}
      id={cartFood.id}
      name={cartFood.item_name}
      restaurant={cartFood.restaurant_name}
      image={cartFood.image}
      category={cartFood.category}
      />
    ))


  return (
    <div>
        {favoritesListItems}
    </div>
  )
}

export default Favorites;

//we want to be able to click on an item with the heart or like and add it to the favorites cart