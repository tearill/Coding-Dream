# Vue

- vue 语法  
  - v-model 双向数据绑定 --- 有表单就用上它  
    设计数据项  
    books: []  
    book: {} --- 一个表单，维护一个对象  
  - methods: {}  
  - 数据驱动  {{单向}} v-model 双向  
    数据 -> compile template -> html + methods + css -> html/css/js 需要时间  
    v-cloak 没有准备好之前，它会在，设置一个 loading 效果  
    ```html
    <style>
        [v-cloak] {
            display: block;
        }
    </style>
    ```
    加上样式，如果网速过慢会暂时不显示出来