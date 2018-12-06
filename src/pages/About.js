import React from 'react'

import { siteMetadata } from '../../gatsby-config'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import { ListGroup, ListGroupItem } from 'reactstrap'

class About extends React.Component {
  render() {
    const { location, data } = this.props

    return (
      <Layout location={location}>
        <Meta site={siteMetadata} title="About" />
        <div className="row">
          <div className="col mt-4">
            <h4>About us</h4>

            <p>
              The Center City Chamber Orchestra was founded in 2018 with the
              goal of uniting a diverse group of student musicians in the
              Philadelphia area. Our members vary in age from underclassmen in
              high school to graduate students. Members come from Philadelphia
              Youth Orchestra, Temple University Boyer College of Music and
              Dance, National Youth Orchestra, Philadelphia All-City Orchestra,
              Philadelphia Sinfonia, Philadelphia Young Artists Orchestra,
              Pennsylvania Music Educators Association, Youth Orchestra of Bucks
              County, Bravo Brass, Temple University Music Prep, Delaware County
              Youth Orchestra, and Temple University Community Music Scholars
              Program.
            </p>

            <ListGroup>
              <ListGroupItem>
                <strong>Davey Hiester</strong>, President, Music Director, and
                Founder{' '}
              </ListGroupItem>
              <ListGroupItem>
                <strong>Oleksandr Kashlyuk</strong>, Co-Music Director{' '}
              </ListGroupItem>
              <ListGroupItem>
                <strong>Marquise Bradley</strong>, Vice President, Artistic
                Advisor, and Conductor-in-Residence{' '}
              </ListGroupItem>
              <ListGroupItem>
                <strong>David Ortiz</strong>, Assistnat Vice President,
                Assistant Artistic Advisor, and Assistant Conductor{' '}
              </ListGroupItem>
              <ListGroupItem>
                <strong>Na’Zir McFadden</strong>, Principal Guest Conductor{' '}
              </ListGroupItem>
            </ListGroup>
          </div>
        </div>
      </Layout>
    )
  }
}

export default About
