import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store'
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

const mapStateToProps = (state) => {
    return {
        focused: state.header.focused
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        }
    }
};

// 无状态组件的性能会更高一些
const Header = (props) => {
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
                    <CSSTransition
                        in={props.focused}
                        timeout={600}
                        classNames="slide"
                    >
                        <NavSearch
                            className={props.focused ? 'focused' : ''}
                            onFocus={props.handleInputFocus}
                            onBlur={props.handleInputBlur}
                        >
                        </NavSearch>
                    </CSSTransition>
                    <span
                        className={props.focused ? 'focused iconfont' : 'iconfont'}
                    >&#xe614;</span>
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
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);