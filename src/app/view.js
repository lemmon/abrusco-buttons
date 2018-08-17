const html = require('nanohtml')
const state = require('./state')
const Button = require('./button')
const Form = require('./form')

const codeHTML = document.getElementById('code')

module.exports = () => {
  const button = Button(state.props)

  codeHTML.innerHTML = code(button)

  return html`
    <div id="app">
      <div class="p05 sd-p1 row">
        <div>${button}</div>
      </div>
      <div>
        ${Form()}
      </div>
    </div>
  `
}

function code(el) {
  return html`<div>${el}</div>`.innerHTML
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/="\s+/g, '="')
    .replace(/\s+"/g, '"')
    .replace(/\s+\w+=""/g, '')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}
