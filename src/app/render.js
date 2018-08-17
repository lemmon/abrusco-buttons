const morph = require('nanomorph')
const state = require('./state')

const props = {}

// render emitter
function render(cb) {
  morph(props.mount, props.view())
  if (cb) {
    cb()
  }
}

// mount
render.init = function(mount, view) {
  props.mount = mount
  props.view = view
}

//
module.exports = render
