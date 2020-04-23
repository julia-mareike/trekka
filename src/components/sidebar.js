import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './sidebar.module.css'

const Sidebar = ({ sidebar }) => {
  return (
    <div className={styles.sidebar}>
      <h4>{sidebar.header}</h4>
      <Link to={`/trekka-the-book`}>
        <Img 
          alt={sidebar.image.title}
          fixed={sidebar.image.fixed}
          style={{ alignSelf: 'center', margin: '10px' }}
        />
      </Link>
      <p>{sidebar.content}</p>
    </div>
  )
}

export default Sidebar