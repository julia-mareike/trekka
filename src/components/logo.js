import React from 'react'
import Img from 'gatsby-image'

const Logo = ({ logo }) => {
  console.log(logo)
  return (
    <Img
      alt={logo.title}
      fixed={logo.image.fixed}
    />
  )
}

export default Logo