import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

const navItems = [
  {
    path: '/',
    title: 'Home'
  },
  {
    path: 'news',
    title: 'Latest News'
  },
  {
    path: 'history',
    title: 'History'
  },
  {
    path: 'the-vehicle',
    title: 'The Vehicle'
  },
  {
    path: 'czech',
    title: 'Czech'
  },
  {
    path: 'trekka-the-book',
    title: 'Trekka the Book'
  },
  {
    path: 'contact-us',
    title: 'Contact Us'
  }
]

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      {navItems.map(item => (
      <li className={styles.navigationItem}>
        <Link to={item.path}>{item.title}</Link>
      </li>
      ))}
    </ul>
  </nav>
)
