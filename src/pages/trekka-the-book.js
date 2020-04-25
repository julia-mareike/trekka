import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

class TrekkaTheBook extends React.Component {
  render() {
    const [logo] = get(this, 'props.data.allContentfulLogo.edges')
    const [sideBar] = get(this, 'props.data.allContentfulSidebar.edges')
    const page = get(this, 'props.data.contentfulPage')

    return (
      <Layout location={this.props.location} logo={logo.node} sidebar={sideBar.node}>
        <div style={{ background: '#fff' }} className="sidebar-child">
          <Helmet title={`Trekka | The Book`} />
          <div className="wrapper">
            <h2 className="section-headline">{page.header}</h2>
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

export default TrekkaTheBook

export const pageQuery = graphql`
  query TrekkaTheBookQuery {
    contentfulPage(title: {eq: "Trekka the Book"}) {
      title
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
