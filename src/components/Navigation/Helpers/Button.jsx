import React, { useEffect, useState } from 'react'
import "./Button.css";

const Button = ({children}) => {

    const [btnState, setBtnState] = useState(false);

    useEffect(()=>{
        
    },[])

    function handleClick(){
        setBtnState(btnState => !btnState);
    }

    let toggleClassCheck = btnState ? 'active' : ""

  return (
    <button className={`nav-btn ${toggleClassCheck}`}
    onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default Button
