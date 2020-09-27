import React from 'react';
import 'antd/dist/antd.css';
import store from './store';
// import axios from 'axios';
import { getInputChangeAction, getAddItemAction, getDeleteItemAction, getInitList } from './store/actionCreator';
import TodoListUI from './TodoListUI';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        store.subscribe(this.handleStoreChange)
    }
    handleInputChange(e) {
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }
    handleStoreChange() {
        this.setState(store.getState());
    }
    handleBtnClick() {
        const action = getAddItemAction();
        store.dispatch(action);
    }
    handleItemDelete(index) {
        const action = getDeleteItemAction(index)
        store.dispatch(action);
    }
    render() {
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                list={this.state.list}
                handleInputChange={this.handleInputChange}
                handleBtnClick={this.handleBtnClick}
                handleItemDelete={this.handleItemDelete}
            />
        );
    }
    componentDidMount() {
        const action = getInitList();
        console.log(action);
        // axios.get('/list.json')
        //     .then((res) => {
        //         const data = res.data;
        //         const action = initListAction(data);
        //         store.dispatch(action);
        //     })
    }
}

export default TodoList;