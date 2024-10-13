// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header-list">
    <ul className="header-item">
      <li>
        <Link to="/" className="header-link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="header-link">
          About
        </Link>
      </li>
    </ul>
  </div>
)
export default Header
