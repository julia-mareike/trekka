import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

class Czech extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const [logo] = get(this, 'props.data.allContentfulLogo.edges')
    const [sideBar] = get(this, 'props.data.allContentfulSidebar.edges')

    return (
      <Layout location={this.props.location} logo={logo.node} sidebar={sideBar.node}>
        <div style={{ background: '#fff' }} className="sidebar-child">
          <Helmet title={siteTitle} />
          <div className="wrapper">
            <h2 className="section-headline">The Trekka in Czech</h2>
            <p>More information coming soon…</p>
            <p>In the meantime you can view two PDF’s of the Trekka in Czech here.</p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Czech

export const pageQuery = graphql`
  query CzechQuery {
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
          content
        }
      }
    }
  }
`
