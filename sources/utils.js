function fromTinyColor(fn) {
  return function (color, value) {
    return color.clone()[fn](value);
  }
}

module.exports = {
  lighten: fromTinyColor('lighten'),
  darken: fromTinyColor('darken'),
  fade: fromTinyColor('setAlpha')
}
