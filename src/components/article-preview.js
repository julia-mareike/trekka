import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './article-preview.module.css'

export default ({ news }) => {
  return (
  <Link to={`/news/${news.slug}`}>
    <div className={styles.preview}>
        <Img alt={news.title} fluid={news.heroImage.fluid} />
        <h4 className={styles.previewTitle}>
          {news.title}
        </h4>
        <small>{news.date}</small>
        <p
          dangerouslySetInnerHTML={{
            __html: news.summary,
          }}
        />
    </div>
  </Link>
)}
