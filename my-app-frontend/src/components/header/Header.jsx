import React, {useState} from 'react'
import PersonIcon from '@material-ui/icons/Person';

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
                
                <button>Login</button>
                <button className="dark-mode-btn" onClick={myFunction}>{isClicked ? "☾" : "☼"}</button>
                <p className="black">Oishii Me Up</p>
        </header>

    </div>
  )
}

// export default Header;