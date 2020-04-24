import React, { useState } from 'react'
import classnames from 'classnames'
import { Link } from 'gatsby'
import styles from './navigation.module.css'
import Menu from '../../static/menu.svg'

const navItems = [
  {
    path: '/',
    title: 'Home'
  },
  {
    path: '/news',
    title: 'News'
  },
  {
    path: '/history',
    title: 'History'
  },
  {
    path: '/the-vehicle',
    title: 'The Vehicle'
  },
  {
    path: '/gallery',
    title: 'Gallery'
  },
  {
    path: '/trekka-the-book',
    title: 'The Book'
  },
  {
    path: '/contact-us',
    title: 'Contact Us'
  }
]

export default () => {
  const [ showDropdownNav, setShowDropdownNav ] = useState(false)

  return (
    <nav role="navigation" className={styles.navContainer}>
      <Menu 
        onClick={() => setShowDropdownNav(!showDropdownNav)}
        className={
          classnames(
            styles.hamburger,
            {
              [styles.hamburgerActive]: showDropdownNav
            }
          )
        }
      />
      <ul className={
        classnames(
          styles.navigation, 
          {
            [styles.dropDown]: showDropdownNav
          }
        )
      }>
        {navItems.map(item => (
        <li className={styles.navigationItem} key={item.path}>
          <Link 
            to={item.path}
            activeClassName={styles.activeLink}
          >
            {item.title}
          </Link>
        </li>
        ))}
      </ul>
    </nav>
  )
}
