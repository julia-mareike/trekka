import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulNews.edges')
    const [image] = get(this, 'props.data.allContentfulHomepageImage.edges')
    const [logo] = get(this, 'props.data.allContentfulLogo.edges')

    return (
      <Layout location={this.props.location} logo={logo.node}>
        <div style={{ background: '#fff5ed' }}>
          <Helmet title={siteTitle} />
          <Hero data={image.node} />
          <div className="wrapper">
            <h2 className="section-headline">Latest News</h2>
            <ul className="article-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ArticlePreview news={node} />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulNews(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          title
          slug
          date(formatString: "MMMM Do, YYYY")
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: FILL, cropFocus: FACE) {
              ...GatsbyContentfulFluid
            }
          }
          summary
        }
      }
    }
    allContentfulHomepageImage {
      edges {
        node {
          title
          image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: FILL
              background: "rgb:ffffff"
            ) {
              ...GatsbyContentfulFluid
            }
          }
          link
        }
      }
    }
    allContentfulLogo {
      edges {
        node {
          title
          image {
            fixed {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`
