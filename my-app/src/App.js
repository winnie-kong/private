import React from 'react';
import './App.css';
import './font/Apple Chancery.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";


 

//这里定义了一个app function直接return出去了
//这里面写的代码被index.js调用了


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Main />
      </Router>
    </div>
  );
}

function Header() {
  return (
  <div className="line">
    <header className="header">
      <span className="header-left"><i className="web-font" >Hexo</i></span>
      <span className="header-right"><Link to="/">Home</Link></span>
     </header>
  </div>   
  );
}

function Main() {
  return (
    <Switch>
      <Route path="/" exact>
        <ArticleList />
      </Route>
      <Route path="/post/:title">
        <Article />
      </Route>

    </Switch>
  );
}



function ArticleList() {

  const title = [
  <div className="content">
    <div className="content-header">
      <h1>安装与过程</h1>
    </div>
  </div>, 
  <div className="content">
    <div className="content-header">
      <h1>所学的技术</h1>
    </div>
  </div>
 ];
 
  return (
    <ul className="tit01">
      {
        title.map(title => (
          <li key={title}><Link to={`/post/${title}`}> {title}</Link></li>  
        ))
      }
    </ul>
  );
}


function Article() {
  const { a } = useParams();
  return (
    <div className="content">{ a }
    <div className="content-header">
      <h1>所学的技术</h1>
      <span>2019-11-27</span>
    </div>
    <div className="content-article">
      <p>本月的任务中，学到的新知识点较多，总结为以下几点。</p> 
      <h2>新知识点与技术</h2>
      <figure className="figure-style">
        <table  className="div-table">
          ::before 
          <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td><span>React</span> 的基础使用方法:搞懂js和html间的调用，在对应的内容中以<span>react</span>的语法将博客复制出来；</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td><span>iconfont</span> 的使用方法：在 <pan>iconfont</pan> 中下载需要的图标代码，解压后放入<span>src</span> 中，在组件中引入使用；</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>使用 <span>webfont</span> 来解决计算机上没有安装字体的问题;</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>以git安装好 "react" 可直接使用其内容，不需要再自己写，如引入语法链接的话，则需承担网站挂的风险；</td>
                  </tr>
          </tbody>
        </table>
      </figure>
      <h2>未解决的问题</h2>
      <figure className="figure-style">
        <table  className="div-table">
          ::before 
          <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td><span>font awesome</span> 的使用方法：用npm安装依赖后，在组件中引入，原教程中的图标代码可见，但一旦替换成官网的其它图标代码，则报错；</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>做多页面跳转时最开始使用的 <span>React router</span> 的方法，但跳转时地址换了内容也没换，使用<span>target="_blank"</span>新页面打开则可解决该问题，但一直没找到原页面无法跳转成功的原因，因此替换成了 <span>a</span> 标签来解决；</td>
                  </tr>
          </tbody>
        </table>
      </figure>
      <p>font awesome 的操作一直没弄清楚，网上的方法都试过一遍，但只要一替换图标代码就报错，不知道是什么原因导致的，最后使用了阿里巴巴的 iconfont 来解决图标问题。</p>
    </div>
    </div>
  );
}

export default App;