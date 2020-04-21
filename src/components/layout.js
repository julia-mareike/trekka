import React from 'react'
import './base.css'
import Container from './container'
import Navigation from './navigation'
import Logo from './logo'
import Sidebar from './sidebar'

class Template extends React.Component {
  render() {
    const { children, sidebar } = this.props
    console.log(this.props)

    return (
      <Container>
        <Logo logo={this.props.logo}/>
        <Navigation />
        <div className="sidebar-wrapper">
          {children}
          { sidebar && <Sidebar sidebar={sidebar} />}
        </div>

      </Container>
    )
  }
}

export default Template
