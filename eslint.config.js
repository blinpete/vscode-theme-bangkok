const antfu = require('@antfu/eslint-config').default

module.exports = antfu({
}, {
  rules: {
    // 'no-irregular-whitespace': 'off',
    // 'style/no-multi-spaces': 'off',
    // 'style/space-before-blocks': 'off',
    // 'style/no-trailing-spaces': 'off',
    'style/key-spacing': 'off',
  },
})
