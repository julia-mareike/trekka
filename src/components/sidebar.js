import React from 'react'
import Img from 'gatsby-image'

import styles from './sidebar.module.css'

const Sidebar = ({ sidebar }) => {
  return (
    <div className={styles.sidebar}>
      <h4>{sidebar.header}</h4>
      <Img 
        alt={sidebar.image.title}
        fixed={sidebar.image.fixed}
        style={{ alignSelf: 'center', 'margin': '10px' }}
      />
      <p>{sidebar.content}</p>
    </div>
  )
}

export default Sidebar