import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

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

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
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
