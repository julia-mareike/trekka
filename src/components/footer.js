import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()
  return <p style={{ marginTop: '30px', fontSize: '0.8em' }}>&copy; copyright {year} TREKKA</p>
}

export default Footer