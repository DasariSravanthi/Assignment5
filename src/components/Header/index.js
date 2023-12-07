import './index.css'

import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import {AiFillHome} from 'react-icons/ai'
import {BsBriefcaseFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'

const Header = props => {
  const {history} = props
  const onLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="header-background">
      <img
        src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
        className="header-logo-img"
        alt="website logo"
      />
      <div className="small-view-icon-container">
        <Link to="/">
          <AiFillHome className="icon-img" />
        </Link>
        <Link to="/jobs">
          <BsBriefcaseFill className="icon-img" />
        </Link>
        <FiLogOut className="icon-img" onClick={onLogout} />
      </div>
      <div className="large-view-container">
        <ul className="large-view-part-container">
          <Link to="/" className="link-element">
            <li>Home</li>
          </Link>
          <Link to="/jobs" className="link-element">
            <li>Jobs</li>
          </Link>
        </ul>
        <button className="logout-btn" onClick={onLogout} type="button">
          Logout
        </button>
      </div>
    </nav>
  )
}

export default withRouter(Header)
