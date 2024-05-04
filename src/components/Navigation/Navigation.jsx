import React from 'react'
import styles from'./Navigation.module.css'
const Navigation = () => {
  return (
      <nav className={`${styles} container`}>
        <div className="headImage">
            <img src="/images/Frame 2 1.png" alt="Frame 2 1" />
        </div>

        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      </nav> 
  )
}

export default Navigation;
