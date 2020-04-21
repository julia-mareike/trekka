import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

class TrekkaTheBook extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const [logo] = get(this, 'props.data.allContentfulLogo.edges')
    const [sideBar] = get(this, 'props.data.allContentfulSidebar.edges')

    return (
      <Layout location={this.props.location} logo={logo.node} sidebar={sideBar.node}>
        <div style={{ background: '#fff' }} className="trekka-the-book">
          <Helmet title={siteTitle} />
          <div className="wrapper">
            <h2 className="section-headline">Trekka the Book - how to purchase</h2>
            <p>Copies of “The Trekka Dynasty” can be purchased direct from the author and publisher Todd Niall.</p>
            <p>The book costs $NZ18 and for international postage rates please just ask.</p>
            <p>There is no payment method through this website, but Paypal and other options are available.</p>
            <p>Just drop me an email at trekkaproject@paradise.net.nz and we can sort it out.</p>
            <p>Also available for purchase via <a href="https://www.trademe.co.nz/Browse/SearchResults.aspx?searchString=trekka+the+book" target="_blank" rel="noopener noreferrer">TradeMe</a>.
            </p>
            <br />
            <p>Todd Niall has produced for Radio New Zealand two documentaries on the Trekka.</p>
            <p>“The Trekka’s Tale” is in two half hour parts and traces the history of the vehicle based on interviews conducted with those involved with the production.</p>
            <p>“Trekka Goes to Venice” is a  half hour documentary recorded in Venice at the opening of Michael Stevenson’s exhibition in 2003, which represented New Zealand at the Venice Biennale.</p>
            <p>For information on how to order and pricing, contact Radio New Zealand’s Replay Radio, at replayradio@radionz.co.nz</p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default TrekkaTheBook

export const pageQuery = graphql`
  query TrekkaTheBookQuery {
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
