import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet-async'
import Layout from '../components/layout'

class ContactUs extends React.Component {
  render() {
    const page = get(this, 'props.data.contentfulPage')

    return (
      <Layout sidebar>
        <div style={{ background: '#fff' }} className="sidebar-child">
          <Helmet title={`Trekka | ${page.title}`} />
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

export default ContactUs

export const pageQuery = graphql`
  query ContactUsQuery {
    contentfulPage(title: {eq: "Contact us"}) {
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
