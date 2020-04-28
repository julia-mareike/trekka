import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet-async'
import Layout from '../components/layout'

class History extends React.Component {
  render() {
    const page = get(this, 'props.data.contentfulPage')

    return (
      <Layout location={this.props.location} sidebar>
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
        </div>
      </Layout>
    )
  }
}

export default History

export const pageQuery = graphql`
  query HistoryQuery {
    contentfulPage(title: {eq: "History"}) {
      title
      header
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
