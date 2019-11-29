import React from 'react';
import './App.css';

function Cont() {
    return (
      <React.Fragment>
       
      <div className="content">
            <div className="content-header">
                <a href='/article.html'  ><h1>安装与过程</h1></a>
                <span>2019-10-22</span>
                
            </div>
            <div className="content-article">
               <p>首先对 <a>"React"</a>  进行了一番了解，通读官方文档，了解过后根据菜鸟教程开始了操作。 <a>"github"</a> 上的地址为：<a href="https://winnie-kong.github.io/" target="_blank"> HEXO 地址</a></p> 
               <p>除了对react这种操作模式的不了解外， <a>"React"</a> 的语法学起来也有点困难。在我的操作中，运用到的应该都是比较基础且单一的。</p>
               <h2>安装过程以及修改内容</h2>
               <figure className="figure-style">
              <table  className="div-table">
                  ::before 
                  <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>以 git 执行 <span>cnpm install -g create-react-app、create-react-app my-app、cd my-app/、npm start</span>命令，打开预览页面<span>http://localhost:3000/</span> ；</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>打开 <span>App.js</span> 页面，在编辑器中对其进行修改；</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>由于内容较多，在 <span>APP.js</span> 中放入了头部和一篇文章的内容，新增了<span>Cont.js</span> 和 <span>Footer.js</span> 把内容分开；</td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td>Footer 的内容涉及 <span>iconfont</span> ，以git 执行命令安装依赖，并在组件中引入使用;</td>
                          </tr>
                          <tr>
                            <th scope="row">5</th>
                            <td>在react 中制作完网站后，在 <span>github</span> 上新建仓库，将内容上传至仓库中。</td>
                            </tr>
                  </tbody>
              </table>
          </figure>
          <p>预览的页面显示的是“index.html” 的内容，在“index.html”上定义"div" 的内容，在“index.js”中引用了“App.js”内容，三者间互相调用。</p>
            </div>

            <div className="content-header">
                <h1>所学的技术</h1>
                <span>2019-11-27</span>
                <a href="https://winnie-kong.github.io/" target="_blank">winnie</a>
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
            </React.Fragment>
              );
            }

 export default Cont;           