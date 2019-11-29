import React from 'react';
import logo from './logo.svg';
import './App.css';
import './font/Apple Chancery.css';


 

//这里定义了一个app function直接return出去了
//这里面写的代码被index.js调用了





function Cont() {
  return (
    <React.Fragment>

    <div className="line">
    <header className="header">
      <span className="header-left"><i className="web-font" >Hexo</i></span>
      <span className="header-right">Home</span>
     </header>
     </div>
    
  </React.Fragment>
  
  );
}

export default Cont;          