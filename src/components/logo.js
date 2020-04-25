import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const Logo = ({ logo }) => {
  return (
    <Link to="/">
        <div className="logo">
        <Img
          alt={logo.title}
          fluid={logo.image.fluid}
          // fadeIn={false}
          loading="eager"
        />
      </div>
    </Link>
  )
}

export default Logo