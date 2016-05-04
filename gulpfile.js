const gulp = require('gulp')
const path = require('path')
const createBlueKit = require('react-bluekit/lib/createBlueKit').default

createBlueKit({
  // base file of start - this is location where componentsIndex.js will be generated to
  baseDir: path.join(__dirname, 'client'),
  gulp,
  // relative paths from base dir where to look for components
  paths: [path.join('.', 'components', 'NotFound'), path.join('.', 'components', 'preview'), path.join('.', 'components', 'Checkbox')]
})
