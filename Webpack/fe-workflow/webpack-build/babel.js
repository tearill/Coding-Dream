module.exports = function({ version }) {
  console.log(version, 'babel.js version---------');
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
      ],
      [
        '@babel/preset-typescript', // 对 ts 进行处理
        {
          allExtensions: true // 支持所有的扩展
        }
      ]
    ],
    plugins: [
      '@babel/plugin-transform-typescript'
    ]
  }
}