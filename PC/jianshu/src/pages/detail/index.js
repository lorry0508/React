import React from 'react';
import {
    DetailWrapper,
    Header,
    Content
} from './style';
import { connect } from 'react-redux';
import { actionCreator } from './store';

class Detail extends React.Component {
    componentDidMount() {
        this.props.getDetail();
    }
    render() {
        const { title, content } = this.props;
        return (
            <DetailWrapper>
                <Header>{title}</Header>
                {/* dangerouslySetInnerHTML防止内容被转义 */}
                <Content dangerouslySetInnerHTML={{ __html: content }} />
            </DetailWrapper>
        );
    }
}

const mapState = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
});

const mapDispatch = (dispatch) => ({
    getDetail() {
        dispatch(actionCreator.getDetail());
    }
});

export default connect(mapState, mapDispatch)(Detail);