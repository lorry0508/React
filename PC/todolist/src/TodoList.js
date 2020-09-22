import React, { Fragment } from 'react';

class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
			list: []
		}
	}
	handleInputChange(e) {
		this.setState({
			inputValue: e.target.value
		})
	}
	handleBtnClick() {
		this.setState({
			inputValue: '',
			list: [...this.state.list, this.state.inputValue]
		})
	}
	handleItemDelete(index) {
		const list = [...this.state.list];
		list.splice(index, 1);
		this.setState({
			list: list
		})
	}
	render() {
		return (
			<Fragment>
				<div>
					<input
						placeholder='请输入内容'
						value={this.state.inputValue}
						onChange={this.handleInputChange.bind(this)}
					/>
					<button onClick={this.handleBtnClick.bind(this)}>提交</button>
				</div>
				<ul>
					{
						this.state.list.map((item, index) => {
							return (
								<li
									style={{ cursor: 'pointer' }}
									key={index}
									dangerouslySetInnerHTML={{ __html: item }}
									onClick={this.handleItemDelete.bind(this, index)}
								>
								</li>
							)
						})
					}
				</ul>
			</Fragment>
		);
	}
}

export default TodoList;