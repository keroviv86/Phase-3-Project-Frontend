import React from 'react'
import DetailContainer from './DetailContainer';

function Map({mapData}) {
console.log(mapData.name)
// console.log(name,restaurant,phone,address)

  return (
    <div className="details">
        <DetailContainer/>
        <ul>
            <li className = "item-name"> {mapData.name} </li> 
            <li className = "restaurant-name">{mapData["restaurant"]}</li>
              <li className = "address" >Here at {mapData.address}</li>
            <li><button><a href={`tel:${mapData.phone}`}>Click to Call</a></button></li>
        </ul>
    </div>
  )
}

export default Map;