import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <ul className='nav'>
                <li>
                    <NavLink exact activeClassName='active' to='/'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName='active' to='/post'>
                        Post A Job
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;