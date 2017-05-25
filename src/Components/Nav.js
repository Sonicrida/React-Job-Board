import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledList = styled.ul`
    display: flex;
    font-size: 2rem;
`;

const StyledListItem = styled.li`
    margin-right: 15px;
`;

function Nav() {
    return (
        <nav>
            <StyledList>
                <StyledListItem>
                    <NavLink exact activeClassName='active' to='/'>
                        Home
                    </NavLink>
                </StyledListItem>
                <StyledListItem>
                    <NavLink activeClassName='active' to='/post'>
                        Post A Job
                    </NavLink>
                </StyledListItem>
            </StyledList>
        </nav>
    );
}

export default Nav;