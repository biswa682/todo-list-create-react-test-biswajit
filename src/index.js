import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import TodoContainer from './TodoContainer'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TodoContainer />, document.getElementById('root'));
registerServiceWorker();
