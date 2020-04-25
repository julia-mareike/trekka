import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import get from 'lodash/get'
import { Helmet } from 'react-helmet-async'
import Layout from '../components/layout'

class Gallery extends React.Component {
  render() {
    const [logo] = get(this, 'props.data.allContentfulLogo.edges')
    const [sideBar] = get(this, 'props.data.allContentfulSidebar.edges')
    const { images } = get(this, 'props.data.contentfulGallery')

    return (
      <Layout location={this.props.location} logo={logo.node} sidebar={sideBar.node}>
        <div style={{ background: '#fff' }} className="sidebar-child">
          <Helmet title={`Trekka | Gallery`} />
          <div className="wrapper">
            <h3 className="section-headline">Gallery</h3>
            {images && images.map(image => (
              <Img
              alt="image"
              fixed={image.fixed}
            />
            ))}
          </div>
        </div>
      </Layout>
    )
  }
}

export default Gallery

export const pageQuery = graphql`
  query GalleryQuery {
    contentfulGallery(title: {eq: "Gallery"}) {
      images {
        fixed {
          ...GatsbyContentfulFixed
        }
      }
    }
    allContentfulLogo {
      edges {
        node {
          title
          image {
            fluid(maxWidth: 400) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
    allContentfulSidebar {
      edges {
        node {
          image {
            fixed(width: 175) {
              ...GatsbyContentfulFixed
            }
          }
          header
          content {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
