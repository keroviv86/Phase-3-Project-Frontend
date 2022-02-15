import React, {useState} from 'react'
// import PersonIcon from '@material-ui/icons/Person';
import Login from "./Login"
import {Link} from 'react-router-dom'

export default function Header() {
  const [isClicked, setIsClicked] = useState(false)

  function myFunction() {
    let element = document.body;
   
    element.classList.toggle("dark");
  
    setIsClicked(isClicked => !isClicked);
  }

  return (
    <div>
        <header className="header">
                
                <button><a href="#/nav"><Link to="/login">Login</Link></a></button>
                <button className="dark-mode-btn" onClick={myFunction}>{isClicked ? "☾" : "☼"}</button>
                <p className="black"><a href="#/nav"><Link to="/foods">Oishii Me Up</Link></a></p>
        </header>

    </div>
  )
}

// export default Header;