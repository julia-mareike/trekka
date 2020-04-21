import React from 'react'
import Img from 'gatsby-image'

import styles from './sidebar.module.css'

const Sidebar = ({ sidebar }) => {
  console.log(sidebar)
  return (
    <div className={styles.sidebar}>
      <p>{sidebar.header}</p>
      <Img 
        alt={sidebar.image.title}
        fixed={sidebar.image.fixed}
        style={{ 'align-self': 'center' }}
      />
      <p>{sidebar.content}</p>
    </div>
  )
}

export default Sidebar