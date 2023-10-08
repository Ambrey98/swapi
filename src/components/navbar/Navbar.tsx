import { NavLink } from 'react-router-dom';
import './Navbar.scss';

function Navbar() {
  return (
    <nav>
      <ul className='list'>
        <NavLink to='/films'className={({isActive}) => isActive ? 'active' : ''}>
          Films
        </NavLink>
        <NavLink to='/people'className={({isActive}) => isActive ? 'active' : ''}>
          People
        </NavLink>
        <NavLink to='/planets'className={({isActive}) => isActive ? 'active' : ''}>
          Planets
        </NavLink>
      </ul>
    </nav>
  )
}

export default Navbar;