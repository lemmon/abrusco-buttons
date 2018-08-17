const html = require('nanohtml')
const state = require('./state')
const store = require('./store')
const render = require('./render')

module.exports = ({ name, caption, options }) => html`
  <div class="span1 span-auto p05 sd-p1">
    <div class="field">
      <div class="field-label f4 fw500 color-black-40 bg-white">${caption}</div>
      <div class="field-radio-collection field-border lh4 bg-white row">
        ${join(options.map(value => html`
          <label
            class="span1 span-auto p1 ac"
          >
            <input
              type="radio"
              name=${name}
              value=${value}
              checked=${value === state.props[name]}
              onclick=${e => {
                state.props[name] = value
                store.save()
                render()
              }}
              onfocus=${e => {
                const border = e.target.closest('.field-border')
                if (border.dataset.focus) {
                  clearTimeout(border.dataset.focus)
                  delete border.dataset.focus
                } else {
                  setTimeout(() => {
                    border.classList.add('field-focus')
                  })
                }
              }}
              onblur=${e => {
                const border = e.target.closest('.field-border')
                if (!border.dataset.focus) {
                  border.dataset.focus = setTimeout(() => {
                    border.classList.remove('field-focus')
                    delete border.dataset.focus
                  })
                }
              }}
            />
            <span>${label(value)}</span>
          </label>
        `), () => html`<div class="div color-black-10 py1"></div>`)}
      </div>
    </div>
  </div>
`

function label(value) {
  if (value === undefined) {
    return 'default'
  }
  if (value === null) {
    return 'none'
  }
  if (Number.isNaN(value)) {
    return value
  }
  if (value && value < 1) {
    return value.toString().replace(/^0\./, '.')
  }
  return value
}

function join(arr, sep) {
  for (let i = arr.length - 1; i; i--) {
    arr.splice(i, 0, sep())
  }
  return arr
}
