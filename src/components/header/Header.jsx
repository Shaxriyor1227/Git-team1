import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div>
      <header>
        <h1>GYM <span style={{color:"yellow"}}>24</span></h1>
        <nav>
          <ul>
            <li>Advantages</li>
            <li>Membership</li>
            <li>About</li>
            <li>Trainers</li>
          </ul>
        </nav>

      </header>
    </div>
  )
}

export default Header