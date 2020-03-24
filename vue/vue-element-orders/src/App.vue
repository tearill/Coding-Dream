<template>
  <div id="app">
    <div>
      <el-input 
      v-model="listQuery.title" 
      placeholder="Title"
      style="width:200px;"
      class="filter-item"
      @keyup.enter.native="getList">

      </el-input>
      <br />
      <el-input 
      v-model="listQuery.author" 
      placeholder="Author"
      style="width:200px;"
      class="filter-item"
      @keyup.enter.native="getList">

      </el-input>
      <br />
      <el-select v-model="listQuery.value" placeholder="请选择排序方式">
        <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        @change="getList">
        </el-option>
      </el-select>
    </div>
    <el-table :data="list">
      <el-table-column 
      label="ID" 
      prop="id" 
      align="center" 
      width="80">

      </el-table-column>
      <el-table-column 
      label="Title" 
      prop="title" 
      align="center" 
      width="300">
        <template slot-scope="{row}">
          <span class="link-type">{{ row.title }}</span>
        </template>
      </el-table-column>
      <el-table-column 
      label="Author" 
      prop="author" 
      align="center" 
      width="100">
        <template slot-scope="{row}">
          <span class="link-type">{{ row.author }}</span>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination 
    @current-change="getList"
    :total="total" 
    :page-size="listQuery.limit"
    layout="total, prev, pager, next"
    :current-page.sync="listQuery.page" />
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  data() {
    return {
      list: [],
      total: 0,
      listLoading: false,
      listQuery: {
        limit: 20,
        page: 1,
        title: '',
        author: "",
        value: ''
      },
      options:[{
        value: 'id',
        label: 'id'
      }],
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      Axios.get('/vue-element-admin/article/list', {
        params: this.listQuery // 查询对象
      })
      .then(response => {
        console.log(response)
        this.list = response.data.list
        this.total = response.data.total
      })
    }
  }
}
</script>

<style>

</style>
