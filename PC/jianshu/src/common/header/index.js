import React from 'react';
import { 
    HeaderWrappper, 
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
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
                    <NavItem className='right'>
                        <span className="iconfont">&#xe636;</span>
                    </NavItem>
                    <SearchWrapper>
                        <NavSearch></NavSearch>
                        <span className="iconfont">&#xe614;</span>
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className='writting'>
                        <span className="iconfont">&#xe708;</span>
                        写文章
                    </Button>
					<Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrappper>
        )
    }
}

export default Header;