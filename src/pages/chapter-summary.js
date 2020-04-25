import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet-async'
import Layout from '../components/layout'

class ChapterSummary extends React.Component {
  render() {
    const [logo] = get(this, 'props.data.allContentfulLogo.edges')
    const [sideBar] = get(this, 'props.data.allContentfulSidebar.edges')
    const page = get(this, 'props.data.contentfulPage')
    const chapterSummaries = get(this, 'props.data.allContentfulChapterSummary.edges')

    console.log(chapterSummaries)
    return (
      <Layout location={this.props.location} logo={logo.node} sidebar={sideBar.node}>
        <div style={{ background: '#fff' }} className="sidebar-child">
          <Helmet title={`Trekka | ${page.title}`} />
          <div className="wrapper">
            <h3 className="section-headline">{page.header}</h3>
            <div className="page-content"
              dangerouslySetInnerHTML={{
                __html: page.content.childMarkdownRemark.html,
              }}
            />
          </div>
          {chapterSummaries.map(({ node }) => {
            console.log(node)
            return (
              <>
                <p>{node.chapterNumber} - {node.title}</p>
                <div className="chapter-summary"
                  dangerouslySetInnerHTML={{
                    __html: node.childContentfulChapterSummarySummaryTextNode.childMarkdownRemark.html,
                  }}
                />
              </>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default ChapterSummary

export const pageQuery = graphql`
  query ChapterSummaryQuery {
    contentfulPage(title: {eq: "Chapter summary"}) {
      title
      header
      content {
        childMarkdownRemark {
          html
        }
      }
    }
    allContentfulChapterSummary(sort: {order: ASC, fields: chapterNumber}) {
      edges {
        node {
          chapterNumber
          title
          childContentfulChapterSummarySummaryTextNode {
            childMarkdownRemark {
              html
            }
          }
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
