import React from "react"
import { Link } from "gatsby"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1 className="mt-0 mb-10 font-sans text-6xl font-black">
          <Link className="shadow-none" to={`/`}>
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3 className="mt-0 font-sans text-2xl font-black">
          <Link className="shadow-none" to={`/`}>
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div className="max-w-2xl px-5 py-10 mx-auto">
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          &copy; 2012 - {new Date().getFullYear()}
          {` `}|{` `}
          <a className="text-blue-600" href="https://toddgoates.com">
            Todd Goates
          </a>
        </footer>
      </div>
    )
  }
}

export default Layout
