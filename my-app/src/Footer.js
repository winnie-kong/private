import React from 'react';
import './iconfont/iconfont.css';



//这个改成render 来写
function Footer() {
  return (
  <div className="author">
    <ul className="iconfont">
      <li><a className="icon-youjian"></a></li>
      <li><i className="icon-github"></i></li>
      <li><i className="icon-wifi"></i></li>
        </ul>
        <p>Powered by <span>Hexo</span> | Theme - <span>Even</span></p>
        <p>© 2015 - 2019 ❤ John Doe</p>
        </div>
            );
          }

export default Footer;               