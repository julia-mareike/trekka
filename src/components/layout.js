import React from 'react'
import './base.css'
import Container from './container'
import Navigation from './navigation'
import Logo from './logo'
import Sidebar from './sidebar'

class Template extends React.Component {
  render() {
    const { children, sidebar } = this.props
    const classname = sidebar ? "sidebar-wrapper" : ""
    
    return (
      <Container>
        <Logo logo={this.props.logo}/>
        <Navigation />
        <div className={classname}>
          {children}
          {sidebar && <Sidebar sidebar={sidebar} />}
        </div>

      </Container>
    )
  }
}

export default Template
