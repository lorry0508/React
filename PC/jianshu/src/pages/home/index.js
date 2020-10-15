import React from 'react';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { actionCreator } from './store';
import { connect } from 'react-redux';

class Home extends React.Component {
    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents(); // 销毁组件一定记得从window移除
    }
    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }
    handleScrollTop() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' alt='' src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                {
                    this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null
                }
            </HomeWrapper>
        );
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }
}

const mapState = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
});

const mapDispatch = (dispatch) => ({
    changeHomeData() {
        dispatch(actionCreator.getHomeInfo());
    },
    changeScrollTopShow() {
        if (document.documentElement.scrollTop > 350) {
            dispatch(actionCreator.toggleTopShow(true));
        } else {
            dispatch(actionCreator.toggleTopShow(false));
        }
    }
});

export default connect(mapState, mapDispatch)(Home);