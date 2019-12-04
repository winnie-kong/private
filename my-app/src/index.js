import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Cont from './Cont';
import Footer from './Footer';
import Ttt from './Ttt';
import * as serviceWorker from './serviceWorker';
// 先是引用了App from './App';，
// 然后获取到了index.html里面定义的id把，  “App from './App'”   放在了index.html里面定义的id


ReactDOM.render(<App/>, document.getElementById('root'));
ReactDOM.render(<Ttt/>, document.getElementById('333'));
ReactDOM.render(<Cont/>, document.getElementById('tent'));
ReactDOM.render(<Footer/>, document.getElementById('info'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
