# elm 31K 人气项目 
- github Vue开源项目学习 👉 https://github.com/bailicangdu/vue2-elm/tree/64ab85906d1177cb23893a6b62cbf774ceb5a68a

- rem  
  css 相对单位  
  html font-size 所有设备自适应  

- Vue 单页应用中怎么做 rem 适配，不能写死 -> 16rem = 100%(动态宽度的100%)  
  16 栅格系统  
  ```js
    (function (doc, win) {
         // 不会污染外界  
         // 计算 html font-size width/16
        var docEl = doc.documentElement,  /*整个 html 文档*/
        resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize',
        recalc = function () {
            // 设备无差异计算出 16rem = 100% width 
            var clientWidth = docEl.clientWidth; // 整个窗口的宽度
            console.log(clientWidth);
        if (!clientWidth) return;
            docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
            // 设备可能从横向变为纵向 或者屏幕尺寸大小发生改变
            win.addEventListener(resizeEvt, recalc, false);
        };
        // false 冒泡 --- 从内向外执行
        // true 捕获 --- 从外向内执行
        doc.addEventListener('DOMContentLoaded', recalc, false);
        // docEl.style.fontSize = '23.5px';
    })(document, window) // 闭包 立即执行 实参
  ```

- 设计组件 header 组件  
  1. header 组件 css  
     comm.styl --- reset  
     mixin.styl --- css 模块化，功能化封装  
  2. 满足各种需求的组件  
     使用 slot 让组件复用性更好，适合各种场景，更灵活  

- 通用组件开发  
  1. UI 组件，通用组件  
  2. css 避开了 iconfont 自定义字体、图片这些，用技术手法高效解决了 --- svg、css  