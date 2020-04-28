import React, { useState } from 'react'
import Img from 'gatsby-image'

import styles from '../pages/gallery.module.css'


const Thumbnail = ({ image }) => {
  return (
    <Img
      className={styles.thumbnail}
      alt="image"
      fluid={image.fluid}
    />
  )
}

export default Thumbnail