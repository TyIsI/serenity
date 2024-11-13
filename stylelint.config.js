const config = require('@tyisi/config-stylelint')

config.extends.push('stylelint-config-tailwindcss')
config.extends.push('stylelint-config-tailwindcss/scss')

module.exports = config
