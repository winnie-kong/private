import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Art from './Art';

import * as serviceWorker from './serviceWorker';
// 先是引用了App from './App';，
// 然后获取到了index.html里面定义的id把，  “App from './App'”   放在了index.html里面定义的id


console.log(11111);

ReactDOM.render(<Art/>, document.getElementById('aaa'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
