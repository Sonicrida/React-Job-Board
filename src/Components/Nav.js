import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const List = styled.ul`
    display: flex;
    font-size: 2rem;
`;

const ListItem = styled.li`
    margin-right: 15px;
`;

function Nav() {
    return (
        <nav>
            <List>
                <ListItem>
                    <NavLink exact activeClassName='active' to='/'>
                        Home
                    </NavLink>
                </ListItem>
                <ListItem>
                    <NavLink activeClassName='active' to='/post'>
                        Post A Job
                    </NavLink>
                </ListItem>
            </List>
        </nav>
    );
}

export default Nav;