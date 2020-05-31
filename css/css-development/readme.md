## BEM  

## CSS-Module  
Vue: scoped 帮忙处理了 CSS 模块化  
解决命名冲突  
```css
/* CSS 模块化 */
@import
```

```js
loader: 'css-loader',
options: {
  modules {
    mode: 'local',
    exportGlobals: true,
    localIndentName: '[hash:base64]',
    hashPrefix: 'my-custom-hash'
  }
}
```

```css
._23_aKvs-b8bW2Vg3fwHozO {
  background: red;
  color: yellow;
}

._13LGdX8RMStbBE9w-t0gZ1 {
  background: blue;
}
```
只在当前组件生效：  
`<div data-v-00e8ca52="" data-v-6fdc8784="" class="view timeline-index-view">`  
.container .view.timeline-index-view[data-v-00e8ca52]  

## CSS in JS  
CSS 里面使用 JS 变量  

styled-component  

## JS in CSS === CSS Houdini  
```js
js: import('./template.js')
// babel 负责编译 js，所以可以运行 
```
- 为什么用不上 css polyfill？  
  JS 在 网页绘制过程中，所能触及到的地方有限  