const html = require('nanohtml')
const state = require('./state')
const store = require('./store')
const render = require('./render')

module.exports = ({ name, caption }) => html`
  <div class="span1 p05 sd-p1">
    <label class="field">
      <div class="field-label f4 fw500 color-black-40 bg-white">${caption}</div>
      <input
        type="text"
        name=${name}
        value=${state.props[name]}
        class="field-input field-border p1 lh4 bg-white"
        oninput=${e => {
          state.props[name] = e.target.value.trim() || 'unnamed button'
          store.save()
          render()
        }}
      />
    </label>
  </div>
`
