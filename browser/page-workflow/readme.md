# 虚拟 DOM + 算法 Tree + 重绘 + 浏览器工作原理  

- 如果下载 CSS 文件阻塞了，会阻塞 DOM 树的合成吗？和阻塞页面的显示吗？  
  不会阻塞 DOM 树的合成，会阻塞页面的显示  
  不同的阶段  

  从输入 url -> 下载 html 文件 -> 解析显示页面 分阶段  
  webpack 工作流，不同的极端 -> 打包输出 dist.js  


-  DOM 树的合成  
-  页面的显示，重绘，重排(与 CSS 处理有关)  
  浏览器把页面展示绘制出来工作流程  
  - 入口？页面绘制的入口 index.html 网络子进程 Buffer  
    resolve: ['.html', 'js', '.css']  
    html 超文本标记语言 <p>渲染流程</p>  
    DOM 标签节点(document.createElement)，文档节点(document.createTextNode)  
    CSS 层叠样式表 stylesheet p {color: red}  
    js JavaScript 动态的 DOM 部分 p.style.color = 'gray'  
    渲染通过最初的 html 文档类型，进行分别处理  

  - 不同类型的文件，不同的 loader  
    类比 webpack：  
    - 开始每个子阶段有输入的内容 .styl .css .png  
    - 对其进行相应的处理 loader  
    - 每个阶段生成输出的内容 bundler.js  
    上一个阶段的输出会成为下一个阶段的输入  

  1. 构建 DOM 树  
    原因：浏览器没办法理解 HTML 结构  
    编程的过程：数据结构 + 算法(CSS selector, js querySelector 查找效率)  
  2. 样式的计算  
    样式表，选择器 权重 层叠  
    当渲染引擎接收到 CSS 文本时，会执行一个转化操作，将 CSS 文本转换为浏览器可以理解的结构——styleSheet  
    放到 docuement.styleSheets 对象中，json 组织 CSS 规则，再进行样式的计算  
    - 转换样式表中的属性值，使其标准化  
      body { fint-size: 2em } em -> px  
      font-weight: bold; bold -> 700  
    - 计算每个节点的具体样式  
      1. 继承  
      2. 层叠  
      3. 浏览器默认样式及节点样式
  3. 布局阶段  
    需要计算出 DOM 树中可见元素的几何位置  
    第二棵树 布局树  
    1. 遍历 DOM 树的所有可见节点，并把这些节点加到布局树中  
    2. 布局计算  

- 圣杯布局和双飞翼布局  
- 三列式布局  
  圣杯布局缺点：宽度小于 left 的时候会掉下去  
  双飞翼布局解决了圣杯布局的 bug，但缺点是 DOM 树更复杂，渲染性能不如圣杯布局  
