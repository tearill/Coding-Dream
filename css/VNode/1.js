let html = '<div :class="c" class="demo" v-if="isShow"><span v-for="item in sz">{{item}}</span></div>'
let index = 0
const ncname = '[a-zA-Z_][\\w\\-\\.]*';
// () match 不包括 \s 
// (?:' + ncname + '\\:)? => 属性
const qnameCapture = '((?:' + ncname + '\\:)?' + ncname + ')'
const startTagOpen = new RegExp('^<' + qnameCapture) // 标签的开始
const startTagClose = /^\s*(\/?)>/ // 标签的结束
const singleAttrIdentifier = /([^\s"'<>/=]+)/
const singleAttrAssign = /(?:=)/
const singleAttrValues = [
  /"([^"]*)"+/.source,  // 双引号
  /'([^']*)'+/.source, // 单引号
  /([^\s"'=<>`]+)/.source // 
]
const attribute = new RegExp(
  '^\\s*' + singleAttrIdentifier.source +
  '(?:\\s*(' + singleAttrAssign.source + ')' +
  '\\s*(?:' + singleAttrValues.join('|') + '))?'
)

// 功能函数
function advance(n) {
  index += n
  html = html.substring(n) // 去除已经遍历的
}

function parseStartTag() {
  const start = html.match(startTagOpen)
  // console.log(start)
  // return
  if (start) {
    const match = { // AST
      tagName: start[1],
      attrs: [],
      start: index // 开始解析的下标
    }
    advance(start[0].length)
    // 属性
    let end, attr
    while(!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
      // 遇到结束标签或属性匹配完了的时候退出
      advance(attr[0].length) // 去除匹配的
      match.attrs.push({
        name: attr[1],
        value: attr[3]
      })
    }
    if (end) {

      advance(end[0].length);
      match.end = index
      return match
    }
  }
}

function parseHTML() {
  while (html) { // html 为空时退出
    let textEnd = html.indexOf('<') // 开始位置
    // 1. 标签
    // 2. 所有的属性
    // 3. 特殊的属性 指令
    // 4. 子元素 => while
    if (textEnd === 0) { // 一开始就是 html
      // 开始标签的匹配
      // console.log(html.match(startTagOpen))
      // return
      if (html.match(startTagOpen)) {
        const startTagMatch = parseStartTag() // 解析刚开始的标签，交给一个函数单独做
        console.log(startTagMatch)
        return
      }
    } else { // 不是 html 标签
      // 处理文本
    }
  }
}

function parse() {
  return parseHTML()
}
const AST = parse() // AST Vue/React -> 抽象语法树 -> 虚拟 DOM

console.log(AST)