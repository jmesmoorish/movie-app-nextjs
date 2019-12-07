
import Link from 'next/link'


//const Navbar = (props) => {
const Navbar = () => {

  //const { isLogin } = props

  let isLogin = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="/index">Movies</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active" hidden={isLogin}>
              <Link href="/">
                <a className="nav-link">Home
                  <span className="sr-only">(current)</span>
                </a>
              </Link>
            </li>
            <li className="nav-item" hidden={isLogin}>
              <Link href="/login">
                <a className="nav-link">Login</a>
              </Link>
            </li>
            <li className="nav-item" hidden={isLogin}>
              <Link href="/signup">
                <a className="nav-link">Signup</a>
              </Link>
            </li>
            <li className="nav-item" hidden={isLogin}>
              <Link href="/about">
                <a className="nav-link">About</a>
              </Link>
            </li>
            <li className="nav-item" hidden={isLogin}>
              <Link href="/admin">
                <a className="nav-link">Admin</a>
              </Link>
            </li>
            <li className="nav-item" hidden={isLogin}>
              <Link href="/user">
                <a className="nav-link">User</a>
              </Link>
            </li>
            <li className="nav-item" hidden={isLogin}>
              <Link href="/">
                <a className="nav-link">Logout</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
