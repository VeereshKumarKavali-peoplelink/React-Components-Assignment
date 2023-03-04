import {Link} from 'react-router-dom';

import './index.css'

const Navbar = () => (
    <div className = "navbar-container">
        <ul className="navbar-unordered-list">
            <li className="navbar-home"><Link to="/" className="navItem">Home</Link></li>
            <li className="navbar-profile"><Link to="/employee" className="navItem">Profile</Link></li>
            <li className="navbar-logout">Logout</li>
        </ul>
        
    </div>

)

export default Navbar