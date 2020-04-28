import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet-async'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

class NewsIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulNews.edges')

    return (
      <Layout sidebar>
        <div style={{ background: '#fff' }} className="sidebar-child">
          <Helmet title={`Trekka | Latest News`} />
          <div className="wrapper">
            <h2 className="section-headline">Latest News</h2>
            <ul className="article-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug} className="article-preview">
                    <ArticlePreview news={node} />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default NewsIndex

export const pageQuery = graphql`
  query NewsIndexQuery {
    allContentfulNews(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          title
          slug
          date(formatString: "MMMM Do, YYYY")
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: FILL, cropFocus: FACE) {
              ...GatsbyContentfulFluid
            }
          }
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
