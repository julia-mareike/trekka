import React from 'react'
import Img from 'gatsby-image'

const Logo = ({ logo }) => {
  console.log(logo)
  return (
    <Img
      alt={logo.title}
      fixed={logo.image.fixed}
      fadeIn={false}
      loading="eager"
    />
  )
}

export default Logo