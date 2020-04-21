import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

class ContactUs extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const [logo] = get(this, 'props.data.allContentfulLogo.edges')
    const [sideBar] = get(this, 'props.data.allContentfulSidebar.edges')

    return (
      <Layout location={this.props.location} logo={logo.node} sidebar={sideBar.node}>
        <div style={{ background: '#fff' }} className="sidebar-child">
          <Helmet title={siteTitle} />
          <div className="wrapper">
            <h2 className="section-headline">Contact us</h2>
            <p>Do you:</p>
            <p>Have news or information about the Trekka?</p>
            <p>Have Trekka parts available?</p>
            <p>Want to find out more about the Trekka?</p>
            <p>Wish to purchase Todd’s Trekka book?</p>
            <p>Then please get in touch:</p>
            <br />
            <p>Email: trekkaproject@paradise.net.nz</p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default ContactUs

export const pageQuery = graphql`
  query ContactUsQuery {
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
