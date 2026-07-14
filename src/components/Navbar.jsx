import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
    <nav className='navbar'>
        <NavLink to="/" className="judul">INI JUDUL</NavLink>
        
        <div className='nav-list'>
        <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} >
            HOME
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} >
            ABOUT
        </NavLink>
        <NavLink to="/project" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} >
            PROJECT
        </NavLink>
        <NavLink to="/pelatihan" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} >
            JURNAL
        </NavLink>
        </div>
    </nav>
    )
}

export default Navbar;