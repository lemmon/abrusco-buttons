const html = require('nanohtml')
const Input = require('./input')
const Select = require('./select')

module.exports = () => doNotRefresh(html`
  <form>
    ${Input({ name: 'caption', caption: 'Caption' })}
    <div class="row">
      ${Select({ name: 'style', caption: 'Style', options: [ undefined, 'outlined', 'clear' ] })}
      ${Select({ name: 'disabled', caption: 'Disabled', options: [ false, true ] })}
      ${Select({ name: 'loading', caption: 'Loading', options: [ false, true ] })}
    </div>
    ${Select({ name: 'color', caption: 'Color', options: [ null, 'blue', 'green', 'red', 'yellow', 'black', 'white' ] })}
    ${Select({ name: 'textColor', caption: 'Text Color / Text Color Hover', options: [ null, 'blue', 'green', 'red', 'yellow', 'black', 'white' ] })}
    <div class="row">
      ${Select({ name: 'px', caption: 'Horizontal Padding', options: [ 0, .25, .5, .75, 1, 2, 3, 4 ] })}
      ${Select({ name: 'py', caption: 'Vertical Padding', options: [ 0, .25, .5, .75, 1, 2, 3, 4 ] })}
    </div>
    ${Select({ name: 'lh', caption: 'Line Height', options: [ 0, 1, 2, 3, 4, 5 ] })}
  </form>
`)

function doNotRefresh(source) {
  source.isSameNode = target => {
    const res = target && target.nodeName && target.nodeName === source.nodeName
    return res
  }
  return source
}
