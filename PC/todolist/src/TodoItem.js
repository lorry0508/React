import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    render() {
        const { content, test } = this.props;
        return (
            <li onClick={this.handleClick}>
                {test} - {content}
            </li>
        );
    }
    // 当一个组件即将被从页面剔除的时候，会被执行
	componentWillUnmount() {
		console.log('child componentWillUnmount')
	}	
    handleClick() {
        const { deleteItem, deleteItemindex } = this.props;
        deleteItem(deleteItemindex);
    }
}

TodoItem.propTypes = {
    test: PropTypes.string.isRequired, // 表示为必传项
    index: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), // oneOfType参数是一个数组，既可以是number， 又可以是字符串
    content: PropTypes.string,
    deleteItem: PropTypes.func
};

TodoItem.defaultProps = {
    test: 'hello react'
};

export default TodoItem;