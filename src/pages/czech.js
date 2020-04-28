import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet-async'
import Layout from '../components/layout'

class Czech extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} sidebar>
        <div style={{ background: '#fff' }} className="sidebar-child">
          <Helmet title={`Trekka | Czech`} />
          <div className="wrapper">
            <h2 className="section-headline">The Trekka in Czech</h2>
            <p>More information coming soon…</p>
            <p>In the meantime you can view two PDF’s of the Trekka in Czech here.</p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Czech
