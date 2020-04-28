import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

const Logo = () => (
  <StaticQuery
    query={graphql`
      query LogoQuery {
        contentfulLogo(image: {title: {eq: "Trekka"}}) {
          title
          image {
            fluid(maxWidth: 400) {
              ...GatsbyContentfulFluid_noBase64
            }
          }
        }
      }
    `}
    render={data => {
      return (
      <Link to="/">
        <div className="logo">
          <Img
            alt={data.contentfulLogo.title}
            fluid={data.contentfulLogo.image.fluid}
            // fadeIn={false}
            loading="eager"
          />
        </div>
      </Link>
    )}}
  />
)

export default Logo