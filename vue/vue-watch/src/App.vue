<template>
  <div id="app">
    <p>{{ message }}</p>
    <p>大写: {{ message | capitalize }}</p>
    <p>逆序：{{ message | reverseMessage }}</p>
    <div id="watch-example">
      <p>
        Ask a yes/no question:
        <input v-model="question">
      </p>
      <!-- api 根据 question -> 请求答案 -->
      <p>{{ answer }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios' // Vue 常用的的请求库
import _ from 'lodash' // Vue 开发中最常用的工具库
export default {
  name: 'App',
  data() {
    return {
      message: 'Hello',
      question: '',
      answer: 'I cannot give you an answer until you ask a question!'
    }
  },
  watch: {
    question: function(newQuestion, OldQuestion){
      // console.log(newQuestion, OldQuestion)
      this.answer = 'Waiting for you to stop typing'
      // this.askQuestion() // 网络请求，不能直接用，在输入期间会输入很多次
      this.debouncedAnswer()
    }
  },
  filters: {
    capitalize(word) {
      return word.toUpperCase()
    },
    reverseMessage(message) {
      return message.split('').reverse().join('')
    }
  },
  created() {
    this.debouncedAnswer = _.debounce(this.getAnswer, 500)
  },
  methods: {
    getAnswer() {
      console.log(this.question)
      // 发送请求
      axios
        .get('https://yesno.wtf/api')
        .then(response => {
          // console.log(response)
          this.answer = response.data.answer
        })
    },
    // getAnser() {
    //   _.debounce(this.askQuestion.bind(this), 500)
    // }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
