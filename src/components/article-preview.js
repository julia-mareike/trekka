import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './article-preview.module.css'

export default ({ news }) => {
  console.log({ news })
  return (
  <div className={styles.preview}>
    <Img alt="" fluid={news.heroImage.fluid} />
    <h3 className={styles.previewTitle}>
      <Link to={`/news/${news.slug}`}>{news.title}</Link>
    </h3>
    <small>{news.date}</small>
    <p
      dangerouslySetInnerHTML={{
        __html: news.summary,
      }}
    />
  </div>
)}
