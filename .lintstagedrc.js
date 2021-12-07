module.exports = {
  '*.{vue,htm,html,css,sss,less,scss,sass}': ['stylelint --fix', 'prettier --write'],
  '*.{ts,tsx}': ['eslint --fix', 'prettier --write']
}
