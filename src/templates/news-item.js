import React from 'react'
import { graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'

import heroStyles from '../components/hero.module.css'

class NewsItemTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulNews')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const [logo] = get(this, 'props.data.allContentfulLogo.edges')

    return (
      <Layout location={this.props.location} logo={logo.node}>
        <div style={{ background: '#fff' }}>
          <Helmet title={`${post.title} | ${siteTitle}`} />
          <div className="wrapper">
            <Link to='news'>Back to News</Link>
            <h1 className="section-headline">{post.title}</h1>
            <p
              style={{
                display: 'block',
              }}
            >
              {post.date}
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: post.content.childMarkdownRemark.html,
              }}
            />
            {post.images.map(image => (
              <Img
              alt={post.title}
              fluid={image.fluid}
            />
            ))}
          </div>
        </div>
      </Layout>
    )
  }
}

export default NewsItemTemplate

export const pageQuery = graphql`
  query NewsItemBySlug($slug: String!) {
    contentfulNews(slug: { eq: $slug }) {
      title
      date(formatString: "MMMM Do, YYYY")
      images {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid
        }
      }
      content {
        childMarkdownRemark {
          html
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
