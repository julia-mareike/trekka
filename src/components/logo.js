import React from 'react'
import Img from 'gatsby-image'

const Logo = ({ logo }) => {
  console.log(logo)
  return (
    <Img
      alt=""
      fixed={logo.image.fixed}
      fadeIn={false}
      loading="eager"
    />
  )
}

export default Logo