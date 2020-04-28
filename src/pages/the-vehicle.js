import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet-async'
import Layout from '../components/layout'

class TheVehicle extends React.Component {
  render() {
    const page = get(this, 'props.data.contentfulPage')

    return (
      <Layout sidebar>
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

export default TheVehicle

export const pageQuery = graphql`
  query TheVehicleQuery {
    contentfulPage(title: {eq: "The Vehicle"}) {
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
