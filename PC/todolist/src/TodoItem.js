import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        const { deleteItem, deleteItemindex } = this.props;
        deleteItem(deleteItemindex);
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.content !== this.props.content) {
            return true;
        } else {
            return false;
        }
    }
    render() {
        const { content } = this.props;
        return (
            <li onClick={this.handleClick}>
                {content}
            </li>
        );
    }
}

TodoItem.propTypes = {
    index: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), // oneOfType参数是一个数组，既可以是number， 又可以是字符串
    content: PropTypes.string,
    deleteItem: PropTypes.func
};

export default TodoItem;