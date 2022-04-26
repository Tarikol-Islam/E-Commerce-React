import React from 'react'
import logo from '../../assets/images/logo/logo.svg'
import './Header.css'

export default function HeaderMain() {
  let url = "";
  return (
    <div className="header-main">

    <div className="container">

      <a href={url} className="header-logo">
        <img src={logo} alt="Anon's logo" width="120" height="36" />
      </a>

      <div className="header-search-container">

        <input type="search" name="search" className="search-field" placeholder="Enter your product name..." />

        <button className="search-btn">
          <ion-icon name="search-outline"></ion-icon>
        </button>

      </div>

      <div className="header-user-actions">

        <button className="action-btn">
          <ion-icon name="person-outline"></ion-icon>
        </button>

        <button className="action-btn">
          <ion-icon name="heart-outline"></ion-icon>
          <span className="count">0</span>
        </button>

        <button className="action-btn">
          <ion-icon name="bag-handle-outline"></ion-icon>
          <span className="count">0</span>
        </button>

      </div>

    </div>

  </div>
  )
}
