import React from 'react'
import { siteMetadata } from '../../gatsby-config'
import Layout from 'components/Layout'
import Meta from 'components/Meta'

class Performances extends React.Component {
  render() {
    const { location } = this.props

    return (
      <Layout location={location}>
        <Meta site={siteMetadata} title="Profile" />
        <div className="container">Performances page.</div>
      </Layout>
    )
  }
}

export default Performances
