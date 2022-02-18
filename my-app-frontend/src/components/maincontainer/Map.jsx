import React from 'react'
import DetailContainer from './DetailContainer';

function Map({mapData, togglePopup, showMap, setShowMap}) {

  return (
    <div className={showMap ? 'popup' : 'gone'}  id="popup-1">
          {/* <div className="overlay"></div> */}
      <div className="details">
          <DetailContainer/>
          <ul>
              <li className = "item-name">{mapData.name} </li> 
              <li className = "restaurant-name">{mapData["restaurant"]}</li>
              <li className = "address" >Here at {mapData.address}</li>
              <li><button className="submit"><a style={{ textDecoration: 'none', color: 'white' }} href={`tel:${mapData.phone}`}>Click to Call</a></button></li>
              
              <button  onClick= {()=>togglePopup()} class="close-btn">&times;</button>
          </ul>
      </div>
    </div>
  )
}

export default Map;