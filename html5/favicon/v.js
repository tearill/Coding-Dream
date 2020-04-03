// 核心逻辑 播放
// alert(2)

// 1. 加载视频放在页面

// 2. 给视频截图
//    canvas 绘图
// 3. 视频截图放在 icon 的 link 标签上(定时任务)

class Video {
  constructor(width = "100", name="moyu") {
    this.width = width
    this.name = name
    this.faviconWidth = this.faviconHeight = 32
    this.timer = null
  }
  initVideo() {
    let video = document.createElement('video') // 先创建标签
    video.width = this.width
    video.controls = 'controls'
    video.src = './video/' + this.name + '.mp4'
    video.crossOrigin = 'anonoymous' // 设置允许跨域，放到公网上的时候
    document.body.appendChild(video)
    this.video = video
    this.bindVideoEvents()
  }
  bindVideoEvents() {
    // video 相关的事件
    const video = this.video
    video.addEventListener('play', () => {
      this.videoToFavicon() // 视频转向图标
    })
    video.addEventListener('canplay', () => {
      video.volume = 0.5 // 音量
      setTimeout(() => {
        video.play()
      }, 500)
    })
  }
  videoToFavicon() {
    if (this.video.ended) {
      return // 播放完了突出
    }
    const context = this.canvas.getContext('2d')
    // 清空上一次画的图
    context.clearRect(0, 0, this.faviconWidth, this.faviconHeight)
    // 画新的图
    context.drawImage(this.video, 0, 0, this.faviconWidth, this.faviconHeight)
    // 定期画图
    this.timer = setTimeout(() => {
      this.videoToFavicon()
    })
    this.setFavicon() // 把画的图设置到 favicon 上面去
  }
  setFavicon() {
    // 设置图标
    const url = this.canvas.toDataURL('image/png')
    // document.querySelector('#img').src = url
    // 找到 head 里的 link 标签，rel 属性有 icon 的，设置一下 url
    const icons = [...document.querySelector('head').querySelectorAll('link')]
                    .filter(link => {
                      const rel = link.getAttribute('rel') || ''
                      return rel.indexOf('icon') > -1
                    })
    if (icons.length) {
      // 有就设置
      icons.forEach(icon => icon.setAttribute('href', url))
    } else {
      // 如果网站没有 icon，就新建一个
      const icon = document.createElement('link')
      link.setAttribute('rel', 'shortcut icon')
      link.setAttribute('href', url)
      document.querySelector('head').appendChild(icon)
    }
  }
  initCanvas() {
    this.canvas = document.createElement('canvas')
    this.canvas.width = this.canvas.height = 32
  }
  init() {
    this.initVideo()
    this.initCanvas()
  }
}

const video = new Video(videoWidth, videoName)
video.init()