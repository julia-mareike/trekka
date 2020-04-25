import React from 'react'
import Img from 'gatsby-image'

const Logo = ({ logo }) => {
  return (
    <div className="logo">
      <Img
        alt={logo.title}
        fluid={logo.image.fluid}
        // fadeIn={false}
        loading="eager"
      />
    </div>
  )
}

export default Logo