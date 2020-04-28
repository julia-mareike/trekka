import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import get from 'lodash/get'
import { Helmet } from 'react-helmet-async'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'
import Layout from '../components/layout'

import 'react-accessible-accordion/dist/fancy-example.css'

class ChapterSummary extends React.Component {
  render() {
    const [sideBar] = get(this, 'props.data.allContentfulSidebar.edges')
    const page = get(this, 'props.data.contentfulPage')
    const chapterSummaries = get(this, 'props.data.allContentfulChapterSummary.edges')

    return (
      <Layout location={this.props.location} sidebar={sideBar.node}>
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
          <Accordion allowZeroExpanded>
            {chapterSummaries.map(({ node }) => {
              return (
                <AccordionItem>
                  <AccordionItemHeading>
                      <AccordionItemButton>
                        {node.chapterNumber} - {node.title}
                      </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    {node.image && <Img
                      alt={node.image.title}
                      fixed={node.image.fixed}
                    />}
                    <div className="chapter-summary"
                      dangerouslySetInnerHTML={{
                        __html: node.childContentfulChapterSummarySummaryTextNode.childMarkdownRemark.html,
                      }}
                    />
                  </AccordionItemPanel>
                </AccordionItem>
              )
            })}
          </Accordion>
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
