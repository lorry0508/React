import React, { Fragment } from 'react';
import TodoItem from './TodoItem';
import './style.css';

class TodoList extends React.Component {
	constructor(props) {
		super(props);
		// 当组件的state或props发生改变时，render函数就会重新执行
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
		const value = this.input.value;
		this.setState(() => ({ // es6 箭头函数的写法，省略return
			inputValue: value
		}));
	}
	handleBtnClick() {
		this.setState((prevState) => ({ // prevState 相当于 thisstate
			inputValue: '',
			list: [...prevState.list, this.state.inputValue]
		}), () => {
			console.log(this.ul.querySelectorAll('li').length, 'ref')
		});
	}
	handleItemDelete(index) {
		/* 不允许直接修改state中的值 */
		this.setState((prevState) => {
			const list = [...prevState.list];
			list.splice(index, 1);
			return { list };
		});
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
						ref={(input) => { this.input = input }}
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
				<ul ref={(ul) => {this.ul = ul}}>
					{this.getTodoItem()}
				</ul>
			</Fragment>
		);
	}
}

export default TodoList;