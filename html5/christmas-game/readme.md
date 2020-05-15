# 九宫格抽奖小游戏  
1. 防抖函数的应用  
2. 用 css 实现九宫格布局  
3. 生成 n 维环形坐标的算法  
4. 如何实现环形随机轨道运动函数  
5. 实现加速度动画  
6. 性能分析与优化  

- 设计思路  
  1. 实现样式  
    九宫格布局  
    滑块样式  
  2. 路径坐标生成器  
    生成滑块运动路径  
  3. 实现环形随机轨道运动函数  
    利用路径坐标生成器和 transform  
    让滑块按照路径运动  
    设计加速算法  
  4. 随机抽奖算法  
  5. 细节  
    开始按钮防抖，避免频繁点击造成不必要的性能损失  
    让滑块绝对定位，避免其他元素的重绘，脱离文档流优化渲染性能  

- 九宫格布局实现  
  使用 flex 实现  
  父容器采用 flex 布局，设置自身的宽高和子元素的宽高，css 设置 `flex-wrap: wrap;` 让子元素在适当的时候进行换行显示  

- 实现滑块环绕环形轨道运动  
  n 维环形坐标生成算法  
  一个九宫格的 4 条边可以用 8 个坐标收尾连接起来  
  把左上角设置为 (0, 0)  
  坐标依次为  
  ```js
  (0, 0) | (1, 0) | (2, 0)
  (0, 1) |  start | (2, 1)
  (0, 2) | (1, 2) | (2, 2)
  ```
  ```js
  function generateCirclePath(n, cell) {
    let arr = []
    for (let i = 0; i < n; i++) {
      arr.push([i * cell, 0])
    }
    for (let i = 0; i < n - 1; i++) {
      arr.push([(n - 1) * cell, (i + 1) * cell])
    }
    for (let i = 0; i < n - 1; i++) {
      arr.push([(n - i - 2) * cell, (n - 1) * cell])
    }
    for (let i = 0; i < n - 2; i++) {
      arr.push([0, (n - i - 2) * cell])
    }
    return arr
  }
  ```

- 实现环形随机轨道运动函数  
  让滑块的起始点(左上角位置)沿着九宫格环形坐标数组一格一格的进行变化  
  ```js
  function run(el, path, n = 1, i = 0, len = path.length) {
    setTimeout(() => {
      if(n > 0) {
        if(len <= i) {
          i = n === 1 ? len : 0
          n--
        }
        el.css('transform', `translate(${path[i][0]}px, ${path[i][1]}px)`)
        run(el, path, n, ++i, len)
      }
    }, 300)   
  }
  ```
  - 实现加速度运动  
    每转一圈将 setTimeout 的延迟时间改变  
    `speed += (300 - speed) / n`  
  - 实现随机停止  
    使用 Math.random() 在最后一圈的时候根据随机返回的数值决定什么时候停止  

- 实现开始按钮的防抖  
  按钮防抖防止多次点击造成性能损耗  
  