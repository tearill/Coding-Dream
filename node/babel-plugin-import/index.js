// babel-types 强大的处理 AST 的节点的工具
module.exports = function(babelTypes) { // babelTypes 工具函数
  const { types } = babelTypes
  return {
    visitor: {
      ImportDeclaration(path, { opts }) {
        // path: 该节点的所有信息
        // opts: 配置
        // console.log(path, opts)
        // 对 AST 增删改查
        if (!path.node.specifiers[0].imported) return
        const imported = path.node.specifiers[0].imported.name // Button
        const source = path.node.source.value // antd
        const local = path.node.specifiers[0].local
        console.log(imported, source)
        // 用 Button 和 antd 构造：import Button from 'antd/Button' 对应的节点
        let specifiers = types.importDefaultSpecifier(local)
        let stringLiteral = types.stringLiteral(`${imported}/${source}`)
        const node = types.importDeclaration([specifiers], stringLiteral)
        // 替换掉原来的节点
        path.replaceWith(node)
      }
    }
  }
}