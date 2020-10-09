import React from 'react';
import { 
    HeaderWrappper, 
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button
} from './style';

class Header extends React.Component {
    render() {
        return (
            <HeaderWrappper>
                <Logo />
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载APP</NavItem>
                    <NavItem className='right'>登陆</NavItem>
                    <NavItem className='right'>Aa</NavItem>
                    <NavSearch></NavSearch>
                </Nav>
                <Addition>
                    <Button className='writting'>写文章</Button>
					<Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrappper>
        )
    }
}

export default Header;