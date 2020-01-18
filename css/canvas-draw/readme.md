# 使用canvas进行绘图
- 参考mdn教程👉https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics

- 获取画布上下文（canvas context）
  const ctx = canvas.getContext('2d');  // 2d对象
- 设置画布的宽高
  var width = canvas.width = window.innerWidth;
  var height = canvas.height = window.innerHeight;

- 简单矩形
  fillStyle 设置填充色
  fillRect 绘制覆盖整个区域的矩形 (前两个参数是矩形左上顶点的坐标，后两个参数是矩形的长宽)
  绘制矩形、线等操作按出现的顺序依次进行。就像粉刷墙面时，两层重叠时新层总会覆盖旧层。

- 描边（stroke）和线条宽度
  绘制仅包含外部框线的矩形
  strokeStyle 设置描边颜色
  strokeRect 绘制一个矩形的轮廓
  默认的描边宽度是 1 (px)，可以通过调整 lineWidth 属性（接受一个表示描边宽度像素值的数字）的值来修改

- 绘制路径
  路径中至少要包含钢笔运行精确路径的代码以确定图形的形状。
  画布提供了许多函数用来绘制直线、圆、贝塞尔曲线，等等。
  beginPath()：在钢笔当前所在位置开始绘制一条路径。在新的画布中，钢笔起始位置为 (0, 0)。
  moveTo()：将钢笔移动至另一个坐标点，不记录、不留痕迹，只将钢笔“跳”至新位置。
  fill()：通过为当前所绘制路径的区域填充颜色来绘制一个新的填充形状。
  stroke()：通过为当前绘制路径的区域描边，来绘制一个只有边框的形状。
  路径也可和矩形一样使用 lineWidth 和 fillStyle / strokeStyle 等功能。

- 绘制三角形
  参考图片👉https://mdn.mozillademos.org/files/16289/%E4%B8%89%E8%A7%92%E5%87%BD%E6%95%B0.png
  1. 绘制一条直线
  2. 利用三角函数 边长 * tan(60°)计算等边三角形的高
  3. 移动钢笔到计算的高的位置
  4. 移动回到开始位置
  5. fill()

- 绘制圆
  arc() 绘制圆弧
  arc() 函数有六个参数。前两个指定圆心的位置坐标，第三个是圆的半径，第四、五个是绘制弧的起、止角度（给定 0° 和 360° 便能绘制一个完整的圆），第六个是绘制方向（false 是顺时针，true 是逆时针）

- 绘制文本
  fillText() 绘制有填充色的文本
  strokeText() 绘制文本外边框（描边）
  这两个函数有三个基本的参数：需要绘制的文字、文本框（围绕着需要绘制文字的方框）左上顶点的X、Y坐标。

- 绘制图片
  drawImage() 将图片绘制在画布上。最简单需要三个参数：需要渲染的图片、图片左上角的X、Y坐标。

- 绘制动画 spirit
  