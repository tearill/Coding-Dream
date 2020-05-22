let htmlStr = `<html>
  <head></head>
  <body>
    <div></div>
  </body>
</html>
`

// 分词
// DOM 节点类型
// { type: element, tagName: 'html', tag: 'startTag' }
// { type: element, tagName: 'html', tag: 'endTag' }
// 语法分析：html 配对

let currentToken = null // 当前正在处理的 html 标签
let stack = [
  { type: 'document', children: [] }
]

function parse(string) {
  let state = start;
  for (let c of string) {
    state = state(c);
  }
}

function start(c) {
  if (c === '<') {
    return tagOpen;
  } else if (c === '\n' || c === ' ') {
    return start;
  }
}

function tagOpen(c) {
  if (c === '/') {
    // </h 结束标签
    return endTagOpen;
  } else if (c.match(/^[a-zA-Z]$/)) {
    // <h 开始标签
    // 去拼接
    currentToken = {
      type: 'element',
      tag: 'startTag',
      tagName: c
    }
    return tagName;
  }
}

function tagName(c) {
  if (c.match(/^[a-zA-Z]$/)) {
    currentToken.tagName += c;
    return tagName;
  } else if (c === '>') {
    // 提交当前的 token
    emit(currentToken);
    return start;
  }
}

function endTagOpen(c) {
  if (c.match(/^[a-zA-Z]$/)) {
    currentToken = {
      type: 'element',
      tag: 'endTag',
      tagName: c
    }
    // 拼接
    return tagName;
  }
}

function emit(token) {
  // console.log(token);
  let top = stack[stack.length - 1]
  if (token.tag === 'startTag') {
    // 入栈
    let element = {
      type: 'element',
      children: [],
      attribute: [],
      tagName: token.tagName
    }
    // 处理子元素
    top.children.push(element);
    stack.push(element);
  } else if(token.tag === 'endTag') {
    // 和栈顶元素对比
    if (top.tagName === token.tagName) {
      // 匹配上了直接 pop
      stack.pop();
    } else {
      throw new Error('no matched tag');
    }
  }
}

// console.log(parse(htmlStr))
parse(htmlStr)

console.log(JSON.stringify(stack, null, 2));