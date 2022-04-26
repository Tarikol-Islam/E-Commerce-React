import React from 'react'
import classes from './NotificationToast.module.css'
import jewelary1 from '../../assets/images/products/jewellery-1.jpg'
export default function NotificationToast() {
  
  return (
    <div className={classes.notificationToast} data-toast>

    <button className={classes.toastCloseBtn} data-toast-close>
      <ion-icon name="close-outline"></ion-icon>
    </button>

    <div className={classes.toastBanner}>
      <img src={jewelary1} alt="Rose Gold Earrings" width="80" height="70" />
    </div>

    <div className={classes.toastDetail}>

      <p className={classes.toastMessage}>
        Someone in new just bought
      </p>

      <p className={classes.toastTitle}>
        Rose Gold Earrings
      </p>

      <p className={classes.toastMeta}>
        <time datetime="PT2M">2 Minutes</time> ago
      </p>

    </div>

  </div>
  )
}
