import React from 'react';

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    render() {
        const { content } = this.props;
        return (
            <div onClick={this.handleClick}>
                {content}
            </div>
        );
    }
    handleClick() {
        const { deleteItem, deleteItemindex } = this.props;
        deleteItem(deleteItemindex);
    }
}

export default TodoItem;