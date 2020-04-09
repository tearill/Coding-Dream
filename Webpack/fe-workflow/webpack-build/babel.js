module.exports = function() {
  return {
    'presets': [
      [
        '@babel/preset-env', // 根据指定的环境进行相应的代码编译
        {
          targets: {
            chrome: 59,
            edge: 13,
            firefox: 50,
            safari: 8
          }
        }
      ]
    ]
  }
}