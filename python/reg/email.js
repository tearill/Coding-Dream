// nb email 正则表达式
// 1105317666@qq.com
// horace_cai@163.com
console.log(/^[\w-]+@[\w-]+\.[\w-]+$/.test("1105317666@qq.com"));
console.log(/^[\w-]+@[\w-]+\.[\w-]+$/.test("horace_cai@163.com"));
// 一定要匹配到. + \.[0-9a-zA-Z_-]+
// shunwu2001@sina.com.cn
console.log(/^[\w-]+@[\w-]+(\.[\w-]+)+$/.test("shunwu2001@sina.com.cn"));