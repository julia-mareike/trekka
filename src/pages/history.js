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
    const page = get(this, 'props.data.contentfulPage')

    return (
      <Layout location={this.props.location} logo={logo.node} sidebar={sideBar.node}>
        <div style={{ background: '#fff' }} className="sidebar-child">
          <Helmet title={siteTitle} />
          <div className="wrapper">
            <h3 className="section-headline">{page.header}</h3>
            <div className="page-content"
              dangerouslySetInnerHTML={{
                __html: page.content.childMarkdownRemark.html,
              }}
            />
          </div>
        </div>
      </Layout>
    )
  }
}

export default History

export const pageQuery = graphql`
  query HistoryQuery {
    contentfulPage(title: {eq: "History"}) {
      header
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
