import React from 'react'
import { StaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './sidebar.module.css'

const Sidebar = () => (
  <StaticQuery
    query={graphql`
      query SidebarQuery {
        contentfulSidebar(header: {eq: "The Trekka Book"}) {
          header
          content {
            childMarkdownRemark {
              html
            }
          }
          image {
            title
            fixed(width: 175) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <div className={styles.sidebar}>
          <h4>{data.contentfulSidebar.header}</h4>
          <Link to={`/trekka-the-book`}>
            <Img 
              alt={data.contentfulSidebar.image.title}
              fixed={data.contentfulSidebar.image.fixed}
              style={{ alignSelf: 'center', margin: '10px' }}
            />
          </Link>
          <div className={styles.sidebarContent}
            dangerouslySetInnerHTML={{
              __html: data.contentfulSidebar.content.childMarkdownRemark.html,
            }}
          />
          </div>  
      )
    }}
  />
)

export default Sidebar
