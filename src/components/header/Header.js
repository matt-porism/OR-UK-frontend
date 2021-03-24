import React, { Component } from 'react'
import './header.scss'
import Logo from '../../assets/logo.png'


export class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <div className="title">
            <h1>Open Referral UK Data Standard</h1>
            <p>Setting the open standard for community data</p>
          </div>
          <div>
            <img src={Logo} alt="logo"/>
          </div>
        </div>
      </header>
    )
  }
}

export default Header