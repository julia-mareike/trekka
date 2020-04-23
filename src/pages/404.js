import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './news.module.css'
import Layout from '../components/layout'

class ErrorPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const [logo] = get(this, 'props.data.allContentfulLogo.edges')

    return (
      <Layout location={this.props.location} logo={logo.node}>
        <div>
          <Helmet title={siteTitle} />
          <div className={styles.hero}>Oops</div>
          <div className="wrapper">
            <h2 className="section-headline">This page doesn't exist yet</h2>
          </div>
        </div>
      </Layout>
    )
  }
}

export default ErrorPage

export const pageQuery = graphql`
  query ErrorPageQuery {
    allContentfulLogo {
      edges {
        node {
          title
          image {
            fixed {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
  }
`
