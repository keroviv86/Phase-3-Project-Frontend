import React, { useState } from 'react'
import FavoriteList from './FavoriteListItem'
import Map from '../Map'

function Favorites({cartItems}) {
    const [mapData, setMapData] = useState({
      name: "",
      restaurant: "",
      phone: "",
      address: "", 
    })

    const favoritesListItems = cartItems.map((cartFood)=>(
      <FavoriteList
      phone= {cartFood.phone}
      key= {cartFood.id}
      id={cartFood.id}
      name={cartFood.item_name}
      restaurant={cartFood.restaurant_name}
      image={cartFood.image}
      category={cartFood.category}
      address= {cartFood.address}
      handleFavClick={handleFavClick}
      />
    ))

    function handleFavClick(name,restaurant,phone,address){
      setMapData({
        ...mapData,
        name:name,
        restaurant:restaurant,
        phone:phone,
        address:address
      })
    }
    console.log(mapData)
      

  return (
    <div>
        {favoritesListItems}
        <Map mapData={mapData}/>
    </div>
  )
}

export default Favorites;

//we want to be able to click on an item with the heart or like and add it to the favorites cart