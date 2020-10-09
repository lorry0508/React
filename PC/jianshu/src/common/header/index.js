import React from 'react';
import { HeaderWrappper, Logo, Nav } from './style';

class Header extends React.Component {
    render() {
        return (
            <HeaderWrappper>
                <Logo />
                <Nav></Nav>
            </HeaderWrappper>
        )
    }
}

export default Header;