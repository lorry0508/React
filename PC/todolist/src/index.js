import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import { Provider } from 'react-redux';
import store from './store';

const App = (
	<Provider store={store}>
		<TodoList />
	</Provider>
);

ReactDOM.render(
	// <React.StrictMode>
	// 	<TodoList />
	// </React.StrictMode>, 严格模式
	App,
	document.getElementById('root')
);