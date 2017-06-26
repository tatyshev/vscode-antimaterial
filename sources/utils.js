const Color = require('tinycolor2');

function fromTinyColor(fn) {
  return function (color, value) {
    if (typeof color === 'string') {
      color = Color(color);
    }

    return color.clone()[fn](value);
  }
}

module.exports = {
  lighten: fromTinyColor('lighten'),
  darken: fromTinyColor('darken'),
  fade: fromTinyColor('setAlpha')
}
