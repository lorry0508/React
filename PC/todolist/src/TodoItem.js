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
    handleClick() {
        const { deleteItem, deleteItemindex } = this.props;
        deleteItem(deleteItemindex);
    }
}

TodoItem.propTypes = {
    test: PropTypes.string.isRequired, // 表示为必传项
    index: PropTypes.arrayOf(PropTypes.number, PropTypes.string), // 既可以是number， 又可以是字符串
    content: PropTypes.string,
    deleteItem: PropTypes.func
};

TodoItem.defaultProps = {
    test: 'hello react'
};

export default TodoItem;