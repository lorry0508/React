import React from 'react';
import { connect } from 'react-redux';
import {
    TopicWrapper,
    TopicItem
} from '../style';

const mapState = (state) => ({
    list: state.get('home').get('topicList')
});

class Topic extends React.Component {
    render() {
        const { list } = this.props;
        return (
            <TopicWrapper>
                {
                    list.map(item => (
                        <TopicItem key={item.get('id')}>
                            <img
                                className='topic-pic'
                                src={item.get('imgUrl')}
                            />
                            {item.get('title')}
                        </TopicItem>
                    ))
                }
            </TopicWrapper>
        )
    }
}

export default connect(mapState, null)(Topic);