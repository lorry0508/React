import React from 'react';
import {
    DetailWrapper,
    Header,
    Content
} from './style';
import { connect } from 'react-redux';

class Detail extends React.Component {
    render() {
        const { title, content } = this.props;
        return (
            <DetailWrapper>
                <Header>{title}</Header>
                {/* dangerouslySetInnerHTML防止内容被转义 */}
                <Content dangerouslySetInnerHTML={{__html: content}} />
            </DetailWrapper>
        );
    }
}

const mapState = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
});

export default connect(mapState, null)(Detail);