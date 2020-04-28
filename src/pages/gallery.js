import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet-async'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Thumbnail from '../components/thumbnail'

import styles from './gallery.module.css'

class Gallery extends React.Component {
  state = {
    modalImage: null
  }
  render() {
    const { images } = get(this, 'props.data.contentfulGallery')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }} className="sidebar-child">
          <Helmet title={`Trekka | Gallery`} />
          <div className="wrapper">
            <h3 className="section-headline">Gallery</h3>
            {this.state.modalImage && (
                <>
                <div className="overlay" role="button" onClick={() => this.setState({ modalImage: null })} />
                <Img
                  className={"lightbox"}
                  alt="image"
                  fluid={this.state.modalImage.fluid}
                />
              </>
            )}
            <div className={styles.thumbnailWrapper}>
              {images && images.map(image => {
                return (
                  <div role='button' onClick={() => {
                    this.setState({ modalImage: image })
                  }}>
                    <Thumbnail image={image} />
                  </div>
                )
              })}
            </div>
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
        fluid {
          ...GatsbyContentfulFluid
        }
        id
      }
    }
  }
`
