import React from 'react'
import './base.css'
import Container from './container'
import Navigation from './navigation'
import Logo from './logo'

class Template extends React.Component {
  render() {
    const { children } = this.props
    console.log(this.props)

    return (
      <Container>
        <Logo logo={this.props.logo}/>
        <Navigation />
        {children}
      </Container>
    )
  }
}

export default Template
