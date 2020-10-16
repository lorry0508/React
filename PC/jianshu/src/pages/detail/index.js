import React from 'react';
import {
    DetailWrapper,
    Header,
    Content
} from './style';
import { connect } from 'react-redux';
import { actionCreator } from './store';

class Detail extends React.PureComponent {
    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
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
    getDetail(id) {
        dispatch(actionCreator.getDetail(id));
    }
});

export default connect(mapState, mapDispatch)(Detail);