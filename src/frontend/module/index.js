import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
console.log('load begin');
ReactDOM.render(React.createElement(App, null), document.getElementById('lazyLoad'));