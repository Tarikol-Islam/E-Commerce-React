import React from 'react'
import classes from './banner.module.css'
import banner1 from '../../../assets/root/banner-1.jpg'
import banner2 from '../../../assets/root/banner-2.jpg'
import banner3 from '../../../assets/root/banner-3.jpg'
export default function banner() {
    let url = "#";
  return (
    <div className={classes.banner}>

    <div className="container">

      <div className={[classes.slider_container, classes.has_scrollbar].join('')}>

        <div className={classes.slider_item}>

          <img src={banner1} alt="women's latest fashion sale" className={classes.banner_img} />

          <div className={classes.banner_content}>

            <p className={classes.banner_subtitle}>Trending item</p>

            <h2 className={classes.banner_title}>Women's latest fashion sale</h2>

            <p className={classes.banner_text}>
              starting at &dollar; <b>20</b>.00
            </p>

            <a href={url} className={classes.banner_btn}>Shop now</a>

          </div>

        </div>

        <div className={classes.slider_item}>

          <img src={banner2} alt="modern sunglasses" className={classes.banner_img} />

          <div className={classes.banner_content}>

            <p className={classes.banner_subtitle}>Trending accessories</p>

            <h2 className={classes.banner_title}>Modern sunglasses</h2>

            <p className={classes.banner_text}>
              starting at &dollar; <b>15</b>.00
            </p>

            <a href={url} className={classes.banner_btn}>Shop now</a>

          </div>

        </div>

        <div className={classes.slider_item}>

          <img src={banner3} alt="new fashion summer sale" className={classes.banner_img} />

          <div className={classes.banner_content}>

            <p className={classes.banner_subtitle}>Sale Offer</p>

            <h2 className={classes.banner_title}>New fashion summer sale</h2>

            <p className={classes.banner_text}>
              starting at &dollar; <b>29</b>.99
            </p>

            <a href={url} className={classes.banner_btn}>Shop now</a>

          </div>

        </div>

      </div>

    </div>

  </div>
  )
}
