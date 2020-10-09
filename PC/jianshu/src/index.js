import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './style.js';
import './statics/iconfont/iconfont.css';

ReactDOM.render(
	/* 严格模式 */
	// <React.StrictMode>
	<Fragment>
		<GlobalStyle />
		<App />
	</Fragment>,
	// </React.StrictMode>,
	document.getElementById('root')
);