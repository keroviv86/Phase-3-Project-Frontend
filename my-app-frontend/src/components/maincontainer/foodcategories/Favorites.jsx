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

    const [showMap, setShowMap]= useState(false)

 

    function togglePopup(){
      setShowMap((showMap)=> !showMap)
     
    }
    console.log(showMap)

  

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
      togglePopup={togglePopup}
      // showMap={showMap}
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
        <Map mapData={mapData}
        togglePopup={togglePopup}
        showMap={showMap}
        setMapData={setMapData}/>
        {favoritesListItems}
    </div>
  )
}

export default Favorites;

//we want to be able to click on an item with the heart or like and add it to the favorites cart