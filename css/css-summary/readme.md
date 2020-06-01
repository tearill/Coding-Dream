## normal flow  
- inline-level-box  
  - 参与 IFC，水平方向一个接着一个布局
- block-level-box  
  - 参与 BFC，垂直方向一个接着一个布局，规定元素垂直布局的规则，是一个隔离的容器
- relative-position  

## BFC 特点  
- margin 折叠：margin 认为只要留白够了就行  
- BFC 里面每个元素的左边，紧紧贴着**包含块**的左边  
  两列布局：左边固定，右边自适应  
  ```html
  <!-- main 新 bfc，它和其他区域互不影响，float 区域和 bfc 不会发生重叠 -->
  <div class="main">
    <div>
      main
    </div>
  </div>
  ```
- 盒子可能会缩小，因为有了 float 脱离文档流(不占据位置)，除非这个盒子新建了一个 BFC  
  清除浮动  
  浮动不占据 normal flow，如果不清除浮动，必然会对外面的元素产生影响  

## BFC 的建立  
1. float
2. absolute
3. display: inline-block, table-cell, tabel-captions
3. overflow 不为 visible