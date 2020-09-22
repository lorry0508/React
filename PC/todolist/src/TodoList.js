import React, { Fragment } from 'react';
import TodoItem from './TodoItem';
import './style.css';

class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
			list: []
		}
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleBtnClick = this.handleBtnClick.bind(this);
		this.handleItemDelete = this.handleItemDelete.bind(this);
	}
	getTodoItem() {
		return this.state.list.map((item, index) => {
			return (
				<TodoItem 
					key={index}
					content={item}
					deleteItemindex={index}
					deleteItem={this.handleItemDelete}
				/>
			);
		})
	}
	handleInputChange(e) {
		const value = e.target.value
		this.setState(() => ({
			inputValue: value
		}))
	}
	handleBtnClick() {
		this.setState((prevState) => ({
			inputValue: '',
			list: [...this.state.list, this.state.inputValue]
		}))
	}
	handleItemDelete(index) {
		/* 不允许直接修改state中的值 */
		this.setState((prevState) => {
			const list = [...prevState.list];
			list.splice(index, 1);
			return {
				list: list
			}
		})
	}
	render() {
		return (
			<Fragment>
				<div>
					<label htmlFor="insertArea">输入内容</label>
					<input
						id="insertArea"
						className='input'
						placeholder='请输入内容'
						value={this.state.inputValue}
						onChange={this.handleInputChange}
					/>
					<button
						style={{ marginLeft: 10 }}
						onClick={this.handleBtnClick}
					>
						提交
					</button>
				</div>
				<ul>
					{this.getTodoItem()}
				</ul>
			</Fragment>
		);
	}
}

export default TodoList;