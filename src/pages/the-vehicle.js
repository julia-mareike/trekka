import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

class TheVehicle extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const [logo] = get(this, 'props.data.allContentfulLogo.edges')
    const [sideBar] = get(this, 'props.data.allContentfulSidebar.edges')

    return (
      <Layout location={this.props.location} logo={logo.node} sidebar={sideBar.node}>
        <div style={{ background: '#fff' }} className="sidebar-child">
          <Helmet title={siteTitle} />
          <div className="wrapper">
            <h3 className="section-headline">About the Trekka</h3>
            <p>The Trekka is the only motor vehicle to be both designed, and mass-produced in New Zealand. 2,500 were built between 1966 and 1973. The locally built bodywork and interior was bolted to Skoda mechanicals imported in kit form from Czechoslovakia.</p>
            <p>The Trekka was the product of import restrictions designed to encourage higher New Zealand content in locally-assembled vehicles. For a short time, New Zealand joined the international club of vehicle exporters.</p>
            <p>Relatively few Trekkas have survived. However the Trekka and its story is becoming increasingly recognised as a part of “Kiwiana” – a uniquely New Zealand product with a place in popular culture.</p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default TheVehicle

export const pageQuery = graphql`
  query TheVehicleQuery {
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
