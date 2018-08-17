const state = require('./state')

module.exports.save = () => {
  localStorage.setItem('abrusco.buttons', JSON.stringify(state.props))
}

try {
  const props = JSON.parse(localStorage.getItem('abrusco.buttons'))
  if (props && typeof props === 'object') {
    state.props = props
  }
} catch (e) {}
