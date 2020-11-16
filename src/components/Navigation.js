import React from 'react'
import logo from "../images/logo.png"
import {Link} from "react-router-dom"

export default function Navigation() {
    return (
      <nav>
          <div className="left">
              <Link to="/">
              <img title="Go to homepage"src={logo} alt="Logo"/>
              </Link>
              </div>
          <div className="right">
              <Link to="/about">About</Link>
          </div>
      </nav>
    )
}
