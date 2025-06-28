import { useContext  } from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';
import { AuthContext } from '../../Context/auth-context';


const NavLinks = props => {
    const auth=useContext(AuthContext);

    return <ul className='nav-links'>
        <li>
            <NavLink to="/">ALL USERS</NavLink>
        </li>
        {auth.isLoggedIn &&<li>
            <NavLink to="/u1/places">MY PLACES</NavLink>
        </li>}
        {auth.isLoggedIn && <li>
            <NavLink to="/place/new">NEW PLACE</NavLink>
        </li>}
        {!auth.isLoggedIn && <li>
            <NavLink to="/auth">AUTHENTICATE</NavLink>
        </li>}
        {auth.isLoggedIn && <li>
            <NavLink to="/auth" onClick={auth.logout}>LOGOUT</NavLink>
        </li>}
    </ul>
}

export default NavLinks


