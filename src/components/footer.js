import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()
  return <p style={{ 'margin-top': '30px', 'font-size': '0.8em' }}>&copy; copyright {year} TREKKA</p>
}

export default Footer