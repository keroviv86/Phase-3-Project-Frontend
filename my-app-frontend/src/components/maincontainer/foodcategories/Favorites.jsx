import React, { useState } from 'react'
import SwipeButton from '../SwipeButton'
import FavoriteList from './FavoriteList'

function Favorites({cartItems}) {
    const cartItemFun = cartItems.map((cartFood)=>(
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
        {cartItemFun}
    </div>
  )
}

export default Favorites;

//we want to be able to click on an item with the heart or like and add it to the favorites cart