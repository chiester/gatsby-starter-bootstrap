import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'

import Post from 'templates/Post'
import Meta from 'components/Meta'
import Layout from 'components/Layout'

const BlogIndex = ({ data, location }) => {
  const posts = get(data, 'remark.posts')
  return (
    <Layout location={location}>
      <Meta site={get(data, 'site.meta')} />
      <div className="row">
        <div className="col-md-12">
          <div className="jumbotron d-flex justify-content-center">
            <iframe
              width="853"
              height="480"
              src="https://www.youtube.com/embed/xuLFTrfizzM"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />{' '}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      meta: siteMetadata {
        title
        description
        url: siteUrl
        author
      }
    }
    remark: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      posts: edges {
        post: node {
          html
          frontmatter {
            layout
            title
            path
            category
            tags
            description
            date(formatString: "YYYY/MM/DD")
            image {
              childImageSharp {
                fixed(width: 500) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
