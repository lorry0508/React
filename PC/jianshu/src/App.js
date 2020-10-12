import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header/index';
import store from './store';

function App() {
	return (
		<Provider store={store}>
			<div>
				<Header />
				<BrowserRouter>
					<div>
						<Route path='/' exact render={() => <div>home</div>}></Route>
						<Route path='/detail' exact render={() => <div>detail</div>}></Route>
					</div>
				</BrowserRouter>
			</div>
		</Provider>
	);
}

export default App;
