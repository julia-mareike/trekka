import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './hero.module.css'

export default ({ data }) => (
  <div className={styles.hero}>
    <Link to={data.link}>
      <Img
        alt={data.title}
        fluid={data.image.fluid}
      />
    </Link>
  </div>
)
