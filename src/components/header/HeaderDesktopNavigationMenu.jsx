import React from 'react'
import eBannerOne from '../../assets/root/electronics-banner-1.jpg'
import eBannerTwo from '../../assets/root/electronics-banner-2.jpg'
import menBanner from '../../assets/root/mens-banner.jpg'
import womenBanner from '../../assets/root/womens-banner.jpg'
import './Header.css'
export default function HeaderDesktopNavigationMenu() {
  let url = "";
  return (
    <nav className="desktop-navigation-menu">

    <div className="container">

      <ul className="desktop-menu-category-list">

        <li className="menu-category">
          <a href={url} className="menu-title">Home</a>
        </li>

        <li className="menu-category">
          <a href={url} className="menu-title">Categories</a>

          <div className="dropdown-panel">

            <ul className="dropdown-panel-list">

              <li className="menu-title">
                <a href={url}>Electronics</a>
              </li>

              <li className="panel-list-item">
                <a href={url}>Desktop</a>
              </li>

              <li className="panel-list-item">
                <a href={url}>Laptop</a>
              </li>

              <li className="panel-list-item">
                <a href={url}>Camera</a>
              </li>

              <li className="panel-list-item">
                <a href={url}>Tablet</a>
              </li>

              <li className="panel-list-item">
                <a href={url}>Headphone</a>
              </li>

              <li className="panel-list-item">
                <a href={url}>
                  <img src={eBannerOne} alt="headphone collection" width="250"
                    height="119" />
                </a>
              </li>

            </ul>

            <ul className="dropdown-panel-list">

              <li className="menu-title">
                <a href={url}>Men's</a>
              </li>

              <li className="panel-list-item">
                <a href={url}>Formal</a>
              </li>

              <li className="panel-list-item">
                <a href={url}>Casual</a>
              </li>

              <li className="panel-list-item">
                <a href={url}>Sports</a>
              </li>

              <li className="panel-list-item">
                <a href={url}>Jacket</a>
              </li>

              <li className="panel-list-item">
                <a href={url}>Sunglasses</a>
              </li>

              <li className="panel-list-item">
                <a href={url}>
                  <img src={menBanner} alt="men's fashion" width="250" height="119" />
                </a>
              </li>

            </ul>

            <ul className="dropdown-panel-list">

              <li className="menu-title">
                <a href={url}>Women's</a>
              </li>

              <li className="panel-list-item">
                <a href={url}>Formal</a>
              </li>

              <li className="panel-list-item">
                <a href={url}>Casual</a>
              </li>

              <li className="panel-list-item">
                <a href={url}>Perfume</a>
              </li>

              <li className="panel-list-item">
                <a href={url}>Cosmetics</a>
              </li>

              <li className="panel-list-item">
                <a href={url}>Bags</a>
              </li>

              <li className="panel-list-item">
                <a href={url}>
                  <img src={ womenBanner }alt="women's fashion" width="250" height="119" />
                </a>
              </li>

            </ul>

            <ul className="dropdown-panel-list">

              <li className="menu-title">
                <a href={url}>Electronics</a>
              </li>

              <li className="panel-list-item">
                <a href={url}>Smart Watch</a>
              </li>

              <li className="panel-list-item">
                <a href={url}>Smart TV</a>
              </li>

              <li className="panel-list-item">
                <a href={url}>Keyboard</a>
              </li>

              <li className="panel-list-item">
                <a href={url}>Mouse</a>
              </li>

              <li className="panel-list-item">
                <a href={url}>Microphone</a>
              </li>

              <li className="panel-list-item">
                <a href={url}>
                  <img src={eBannerTwo} alt="mouse collection" width="250" height="119" />
                </a>
              </li>

            </ul>

          </div>
        </li>

        <li className="menu-category">
          <a href={url} className="menu-title">Men's</a>

          <ul className="dropdown-list">

            <li className="dropdown-item">
              <a href={url}>Shirt</a>
            </li>

            <li className="dropdown-item">
              <a href={url}>Shorts & Jeans</a>
            </li>

            <li className="dropdown-item">
              <a href={url}>Safety Shoes</a>
            </li>

            <li className="dropdown-item">
              <a href={url}>Wallet</a>
            </li>

          </ul>
        </li>

        <li className="menu-category">
          <a href={url} className="menu-title">Women's</a>

          <ul className="dropdown-list">

            <li className="dropdown-item">
              <a href={url}>Dress & Frock</a>
            </li>

            <li className="dropdown-item">
              <a href={url}>Earrings</a>
            </li>

            <li className="dropdown-item">
              <a href={url}>Necklace</a>
            </li>

            <li className="dropdown-item">
              <a href={url}>Makeup Kit</a>
            </li>

          </ul>
        </li>

        <li className="menu-category">
          <a href={url} className="menu-title">Jewelry</a>

          <ul className="dropdown-list">

            <li className="dropdown-item">
              <a href={url}>Earrings</a>
            </li>

            <li className="dropdown-item">
              <a href={url}>Couple Rings</a>
            </li>

            <li className="dropdown-item">
              <a href={url}>Necklace</a>
            </li>

            <li className="dropdown-item">
              <a href={url}>Bracelets</a>
            </li>

          </ul>
        </li>

        <li className="menu-category">
          <a href={url} className="menu-title">Perfume</a>

          <ul className="dropdown-list">

            <li className="dropdown-item">
              <a href={url}>Clothes Perfume</a>
            </li>

            <li className="dropdown-item">
              <a href={url}>Deodorant</a>
            </li>

            <li className="dropdown-item">
              <a href={url}>Flower Fragrance</a>
            </li>

            <li className="dropdown-item">
              <a href={url}>Air Freshener</a>
            </li>

          </ul>
        </li>

        <li className="menu-category">
          <a href={url} className="menu-title">Blog</a>
        </li>

        <li className="menu-category">
          <a href={url} className="menu-title">Hot Offers</a>
        </li>

      </ul>

    </div>

  </nav>
  )
}
