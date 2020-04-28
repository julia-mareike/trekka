import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet-async'
import styles from './news.module.css'
import Layout from '../components/layout'

class ErrorPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <div>
          <Helmet title={'Trekka | Error'} />
          <div className={styles.hero}>Oops</div>
          <div className="wrapper">
            <h2 className="section-headline">This page doesn't exist yet</h2>
          </div>
        </div>
      </Layout>
    )
  }
}

export default ErrorPage