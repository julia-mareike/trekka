import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

class History extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const [logo] = get(this, 'props.data.allContentfulLogo.edges')
    const [sideBar] = get(this, 'props.data.allContentfulSidebar.edges')

    return (
      <Layout location={this.props.location} logo={logo.node} sidebar={sideBar.node}>
        <div style={{ background: '#fff' }} className="sidebar-child">
          <Helmet title={siteTitle} />
          <div className="wrapper">
            <h2 className="section-headline">History - How it started</h2>
            <p>The Trekka emerged as the ultimate response to policies pursued by successive New Zealand Government’s aimed at boosting the homegrown content of the local motor industry.</p>
            <p>By making new cars scarce and expensive, policies which began evolving from the 1950s offered concessions to firms able to increase the local content of cars assembled inside New Zealand.</p>
            <p>The Trekka was a locally-produced, steel body with canvas or fibreglass canopies, bolted to the chassis and engine of the Skoda Octavia Combi, which dated form the late 1950′s.</p>
            <p>The Trekka concept was first explored by Phil Andrews’ Motor Lines firm, which imported Skodas. It was finally produced by Motor Holdings, an independent car assembler largely owned by the Turner family, and masterminded by its “rough diamond” managing director, Noel Turner.</p>
            <p>The secret of the Trekka’s brief success was the high proportion of its content which was produced in New Zealand. This allowed a more generous allocation of import licence for the Czechoslovakian mechanical kit. The Skoda kit was bought at bargain prices from the then Communist state, helping to make the Trekka almost the cheapest vehicle available in New Zealand. It was also exported to Australia and Indonesia.</p>
            <p>The Trekka for several years was a steady seller, but import restrictions relaxed from 1970 saw it swept aside by more attractive, largely Japanese, vans and utilities.</p>
            <p>Progressive lowering of import tariffs saw the end of New Zealand’s once highly-protected, booming local vehicle assembly, in 1998.</p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default History

export const pageQuery = graphql`
  query HistoryQuery {
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
