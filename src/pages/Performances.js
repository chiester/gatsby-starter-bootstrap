import React from 'react'
import { siteMetadata } from '../../gatsby-config'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  ListGroup,
  ListGroupItem,
} from 'reactstrap'

class Performances extends React.Component {
  render() {
    const { location } = this.props

    return (
      <Layout location={location}>
        <Meta site={siteMetadata} title="Performances" />
        <div className="row">
          <div className="col-md-12 mt-4">
            <h4>Performances</h4>
          </div>
          <div className="col-md-6 mt-4">
            <Card className="mt-4">
              <CardBody>
                <CardTitle className="pt-2">
                  <strong>Upcoming Performance</strong>
                  Ad
                </CardTitle>
                <CardSubtitle className="pb-4">Save the date!</CardSubtitle>
                <CardText>
                  <ListGroup className="mb-4">
                    <ListGroupItem>
                      Date: <strong>January 5, 2018</strong>
                    </ListGroupItem>
                    <ListGroupItem>
                      Time: <strong>4:30PM (subject to change)</strong>
                    </ListGroupItem>
                    <ListGroupItem>
                      Location: <strong>TBD (check back for updates!)</strong>
                    </ListGroupItem>
                  </ListGroup>
                </CardText>
              </CardBody>
            </Card>
          </div>

          <div className="col-md-6 mt-4">
            <Card className="mt-4">
              <CardBody>
                <CardTitle className="pt-2">Previous Performance</CardTitle>
                <CardText className="mb-4">
                  <p>
                    Thursday, June 14th, 2018, 6:00 PM Philadelphia Ethical
                    Society
                  </p>

                  <p>Brass Quintet no. 1, Op. 5 by Victor Ewald</p>

                  <p>
                    String Quartet No. 4, Op. 18, No. 4 by Ludwig van Beethoven
                  </p>

                  <p>Brass Quintet no. 1, Op. 5 by Victor Ewald</p>
                </CardText>

                <a
                  className="pt-4"
                  href="https://hiester.imgix.net/CCCOProgram1.pdf"
                  class="card-link"
                >
                  Program (PDF)
                </a>
                <a
                  target="_blank"
                  className="pt-4"
                  href="https://youtu.be/xuLFTrfizzM"
                  class="card-link"
                >
                  Video
                </a>
              </CardBody>
            </Card>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Performances
