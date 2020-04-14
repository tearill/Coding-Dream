// .ts  .js
// js/Vue 数据 data -> Vuex action -> api -> node server | mock 
// ts 是 js 的超集，类型约束
// 数据很容易出错，对重要的数据做类型的约束
export interface MemberEntity {
  id:  number,
  login: string,
  avatar_url: string
}