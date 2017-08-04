import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function Nav() {
    return (
        <nav className="navbar is-transparent has-text-white container">

            <div className="navbar-brand">
                <NavLink exact className="navbar-item" activeClassName='active' to='/'>
                    React Job Board
                </NavLink>
            </div>

            <div className="navbar-menu">
                <div className="navbar-start">
                    <NavLink className="navbar-item" activeClassName='active' to='/create-job-post'>
                        Post A Job
                    </NavLink>
                </div>
                    
            </div>

            



        </nav>
    );
}

export default Nav;