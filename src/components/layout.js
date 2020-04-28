import React from 'react'
import './base.css'
import Container from './container'
import Navigation from './navigation'
import Logo from './logo'
import Sidebar from './sidebar'
import Footer from './footer'

class Template extends React.Component {
  render() {
    const { children, sidebar } = this.props
    const classname = sidebar ? "sidebar-wrapper" : ""
    
    return (
      <Container>
        <Logo />
        <Navigation />
        <div className={classname}>
          {children}
          {sidebar && <Sidebar />}
        </div>
        <Footer />
      </Container>
    )
  }
}

export default Template
