# material design 来自 google 的UI风格  

- 特别的地方  
  从 css 风格 -> 组件化 -> react 入门  

- 波浪的感觉  
  使用 css  
  - material design 的灵魂，在于对交互的创新  
    波浪感，进度条的进度感  
    移动端细节:  
        cursor: pointer 用的是非 button 组件
        user-select: none;
        stylus 嵌入式 ::after  :active::after

  1. background-image  
     背景图片 url 引入的方式，在移动时代，渐变也可以生成  
     既生成了背景，同时又没有用图片  

     background-image radial-gradient(circle, #fff 10%, transparent 11%)  

     从元素中心点渐变，起始色为 #fff，渐变到 transparent  

     #fff 10% 表示距离原点半径 10% 这段距离都是 #fff  

     transparent 11% 表示距离原点 10% 到 11% 都是 transparent --- 10% 白 1%的透明(带来了周围一圈光晕)  

     由于没有设置其他颜色，所以距离原点11px以后都是transparent颜色

     参数(用法):  
     background: radial-gradient(shape, size, position, start-color, ..., last-color);

  2. transform: scale(12) 12 -> 0  --- 动态改变 从放大 12 倍变回原样  
     transition transform .6s, opacity .6s  --- 过渡效果 花0.6秒进行放大和透明度的变化

  3. pointer-events: none;

- 一堆的按钮  
  为开发准备好基础组件，小程序中用过组件  
  要用到的按钮，这里都会有，warning、大一些的按钮、块级  
  提供通用的，变通的，兼容性好的，各种常见要求的(70%的业务开发)，就叫组件  
  css 有些变化(状态，primary circle block)，如何变化组装进去  
  
  和 html 的区别：  
  1. 把它的样式封装进去  
     组件(组合html，css，js)  

- ReactDOM --- React 和 DOM 交互的库  
  基本语法：  
  定义了一个 Button 组件：type 文字 block 等有通用性的需求  
  需要在babel编译的环境下执行  
  `<script type="text/babel"></script>`
  1. ReactDOM.render(组件, document.getElementById('')) --- 在某个结点下插入组件 --- 把组件渲染到节点上  
     JSX 语法  
     才可以在 root 里面显示组件，组件要编译  
  2. 定义相应的组件  

    ```js
        function Button(props) { // 定义组件
            return (
                <div></div>
            )
        }
    ```  

    props --- 插入的参数
  3. 只要写一次，以后所有的按钮都可以用它
  