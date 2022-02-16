import React, { useState } from 'react'
import SwipeButton from '../SwipeButton'

function Favorites({foodItems}) {
    function handleClick(){
        console.log("hi")
    }


  return (
    <div>
        <p>example-this is the best foood </p>
        <SwipeButton
        handleClick={handleClick}
        />
    </div>
  )
}

export default Favorites;

//we want to be able to click on an item with the heart or like and add it to the favorites cart