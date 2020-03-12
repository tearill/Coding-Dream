# vuex-mongo-user

- 将数据流通  
  不用 vuex 的时候：数据绑定 -> 数据流(洪流)  
  用了 vuex 之后，起到一个 "三峡" 的作用  

- 数据驱动页面，组件做不了主，页面只是一个 template  
  把所有的数据放在组件的 data 中不利于数据的管理，data 存放的应该组件自己可以决定的数据  
  请一个财务 vuex  
  使用 vuex 之后可以把项目分成两部分 UI界面(地方，申请使用数据) || 数据流管理 vuex(中央，发放数据)  
  少用 data，使用 computed 代替  
  
- mongodb -> api -> vuex -> component  
  1. 数据流源头在 mongodb，使用 express 和数据库服务器通信  


- 应用场景 vuex 设计思考  