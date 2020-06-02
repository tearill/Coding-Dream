## container-block 包含块  
页面元素有一个箱子装着  
箱子：container-block 包含块  

position: fiexed  
position: absolute  
width: 100%  

连续媒体：网页内容未超过整个视窗区域  
分页媒体：网页内容超出视窗区域  

## 确定包含块  
- 如果 position 属性为 static、relative 或 sticky，包含块可能由它最近的祖先块元素的内容区的边缘组成  
- 如果 position 属性为 absolute ，包含块就是由它的最近的 position 的值不是 static （也就是值为fixed, absolute, relative 或 sticky）的祖先元素的内边距区的边缘组成  
- 如果 position 属性是 fixed，在连续媒体的情况下(continuous media)包含块是 viewport ,在分页媒体(paged media)下的情况下包含块是分页区域(page area)  
- 如果 position 属性是 absolute 或 fixed，包含块也可能是由满足以下条件的最近父级元素的内边距区的边缘组成的：  
  1. transform/perspective 不为 none  
  2. will-change: transform/perspective  
  3. filter 不是 none 或者 will-change 是 filter(obly works for firefox)  
  4. contain 是 paint  

## position  
static  
relative  
fixed：默认相对于 viewport 创建的包含块来定位，除非它的祖先元素设置了上面四条属性，该祖先元素表现为包含块  
absolute: 相对于它的包含块确定盒子的定位和大小  

width、height、padding、margin 等，他们的百分比计算的时候也是相对于 container-block 计算的  

## normal flow  
格式化上下文：
inline-level-box：水平方向从左往右布局，垂直方向默认以 base line 对齐  
block-level-box：从上到下布局  
relative position：

## base line  
基线  

## reference  
https://www.w3.org/TR/2020/WD-css-position-3-20200519/#relpos-insets  