module.exports = {
    root: true,
    parserOptions: {
      parser: 'babel-eslint',
      sourceType: 'module'
    },
    env: {
      browser: true,
      node: true,
      es6: true,
    },
    // extends: ['plugin:vue/recommended', 'eslint:recommended'], // 最严格模式，会在命令窗口打印错误提示
    
    rules: {
      // 'camelcase': [2, {
      //   'properties': 'always'
      // }], // 强制使用骆驼拼写法命名约定
      // 'no-console': 'off', // 禁用 console
      // 'no-eval': 2, // 禁用 eval()
      // 'quotes': [1, 'single'], //引号类型 `` '' ''
      // 'semi': [2, 'never'], // 语句强制分号结尾
      // 'space-before-function-paren': [0, 'always'], //函数定义时括号前面要不要有空格
      // 'vue/html-self-closing': [0 ,{
      //   'html': {
      //     'void': 'never',
      //     'normal': 'any',
      //     'component': 'any'
      //   },
      //   'svg': 'always',
      //   'math': 'always'
      // }],
      // 'vue/order-in-components': [0, {}]
    }
  }