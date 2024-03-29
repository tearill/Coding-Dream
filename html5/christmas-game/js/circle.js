if (window.addEventListener) {
  // 防抖
  function debounce(fn, interval = 300) {
    let timer = null
    return function (...args) {
      let context = this // 保存上下文
      timer && clearTimeout(timer) // 清除定时器
      timer = setTimeout(() => { // 延迟执行
        fn.apply(context, args) // 调用函数
      }, interval)
    }
  }
  window.addEventListener('load', function () {
    // 1. 点击开始按钮,开始抽奖
    $('.start').on('click',debounce(() => { run($('.spin'), generateCirclePath(3, 100), 3) }))
    // $('.start').on('click', debounce(() => {
    //   // 点击开始后禁用点击
    //   $('.start').css('pointer-events', 'none')
    //   run($('.spin'), generateCirclePath(3, 100), 3, () => {
    //     // 动画结束后开启按钮点击
    //     $('.start').css('pointer-events', 'auto')
    //     alert('抽奖结束')
    //   })
    // }))

    /**
     * 生成 n 维环形坐标
     * @param {number} n 维度
     * @param {number} cell 单位坐标长度
     */
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

    /**
     * 环形随机轨道运动函数
     * @param {element} el 运动的 DOM 元素
     * @param {array} path 运动的环形坐标集合
     * @param {number} speed 运动的初始速度
     * @param {number} i 运动的初始位置
     * @param {number} len 路径的长度
     * @param {number} random 中奖坐标
     */
    function run(el, path, n = 1, speed = 60, i = 0, len = path.length, random = Math.floor(Math.random() * len)) {
      setTimeout(() => {
        if (n > 0) {
          // 如果 n 为 1,则设置中奖数值
          if (n === 1) {
            // 根据随机数来决定停止的位置
            len = random
          }
          if (len <= i) {
            i = n === 1 ? len : 0
            n--
            // 每执行依次之后改变延迟的时间
            speed += (300 - speed) / n
          }
          el.css('transform', `translate(${path[i][0]}px, ${path[i][1]}px)`)
          run(el, path, n, speed, ++i, len, random)
        }
      }, speed)
    }
  })
} else {
  alert('请升级浏览器！')
}


