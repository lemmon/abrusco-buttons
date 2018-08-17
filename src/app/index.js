const state = require('./state')
const render = require('./render')

document.addEventListener('DOMContentLoaded', () => {
  render.init(
    document.getElementById('app'),
    require('./view'),
  )
  render()
}, false)
