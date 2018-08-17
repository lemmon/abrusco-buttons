const html = require('nanohtml')

module.exports = (props) => html`
  <button
    class="
      button
      button-over
      ${props.style && `button-${props.style}` || ``}
      ${props.color && `bg-${props.color}` || ``}
      ${props.style
        ? props.color && `color-${props.color}` || ``
        : props.textColor && `color-${props.textColor}` || ``
      }
      ${
        props.px && props.py && props.px == props.py
        ? `p${padding(props.px)}`
        : `
            ${props.px && `px${padding(props.px)}` || ``}
            ${props.py && `py${padding(props.py)}` || ``}
          `
      }
      ${props.lh && `lh${props.lh}` || ``}
    "
    type=${props.type || `button`}
    name=${props.name || ``}
    value=${props.value  || ``}
    ${props.disabled || props.loading ? `disabled` : ``}
    ${props.loading ? `data-loading` : ``}
    onclick=${props.onclick}
  ><span
    class="
      button-caption
      ${props.style && props.textColor && `color-${props.textColor}` || ``}
    ">${props.caption}</span></button>
`

function padding(val) {
  return val.toString().replace('.', '')
}
