import React from 'react'
import classes from './Header.module.css'
import HDNMenu from './HeaderDesktopNavigationMenu'
import HeaderMain from './HeaderMain'
import HMNMenu from './HeaderMobileNavigationMenu'
import HeaderTop from './HeaderTop'
export default function Header() {
  return (
    <header>
        <HeaderTop classes = {classes}/>
        <HeaderMain classes={classes}/>
        <HDNMenu classes={classes}/>
        <HMNMenu classes={classes}/>
    </header>
  )
}
