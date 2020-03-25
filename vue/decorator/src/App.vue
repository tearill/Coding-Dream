<template>
  <div id="app">
   <el-table
   :data="list">
    <el-table-column
      label="日期"
      prop=""
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span>{{ scope.row.date }}</span>
      </template>
    </el-table-column> 
    <el-table-column
      label="姓名"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p>
          <div 
            slot="reference"
            class="name-wrapper">
            <el-tag size="medium">
              {{ scope.row.name }}
            </el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column> 
    <el-table-column
    label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
        >删除</el-button>
      </template>
    </el-table-column>
   </el-table>
  </div>
</template>

<script>
import { MessageBox } from 'element-ui'
// 讲 handleDelete 没有功能的毛坯函数装修到有 confirm 功能
function confirmation(target, name, descriptor) {
  console.log(target, name, descriptor)
  let oldValue = descriptor.value
  console.log(oldValue) // 被装饰的函数原来的内容
  descriptor.value = function(...args) {
    // console.log(args)
    MessageBox.confirm('您确定要删除吗', '提示')
      .then(oldValue.bind(this, ...args))
      .catch(() => {})
  }
  return descriptor
}
export default {
  data() {
    return {
      list: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路185弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路1517弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路1519弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路185弄'
        }
      ]
    }
  },
  methods: {
    // 在很多地方要被提醒的用户体验
    @confirmation
    handleDelete(index, row) {
      this.list.splice(index, 1)
    }
    // handleDelete(index, row) {
      // console.log(index, row)
      // this.list.splice(index, 1)
      // this.$confirm('确认要删除吗', '删除')
      //   .then(({ value }) => {

      //   })
      // MessageBox.confirm('您确定要删除吗？', '提示')
      //   .then(() => {
      //     console.log(arguments)
      //     this.list.splice(arguments[0], 1)
      //   })
      //   .catch(() => {

      //   })
    // }
  }
}
</script>
