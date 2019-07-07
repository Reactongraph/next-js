import Link from 'next/link'

const Navbar = () => (
  <div className="navbar-container">
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          Next js
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about">
                <a className="nav-link">About</a>
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link href="/login">
                <a className="nav-link">Login</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/signup">
                <a className="nav-link">Sign Up</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
)

export default Navbar
