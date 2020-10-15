import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header/index';
import store from './store';
import Home from './pages/home';
import Detail from './pages/detail';

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<div>
					<Header />
					<Route path='/' exact component={Home}></Route>
					<Route path='/detail/:id' exact component={Detail}></Route>
				</div>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
