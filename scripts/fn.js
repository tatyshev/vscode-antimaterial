const Color   = require('tinycolor2');
const fs      = require('fs');
const path    = require('path');
const resolve = path.resolve;

function green (text) {
  return '\x1b[92m' + text + '\x1b[0m';
}

function tap (amount) {
  amount = amount + 1 || 2;
  return new Array(amount).join('  ');
}

function replacer (key, value) {
  if (value instanceof Color) {
    if (value.getAlpha() === 1) {
      return value.toHexString();
    } else {
      return value.toHex8String();
    }
  }

  return value;
}

function getSource (name) {
  const path = resolve(`./sources/${name}`);
  return require(path);
}

function createTheme (file, theme) {
  const dest = resolve(`./themes/${file}`);
  const content = JSON.stringify(theme, replacer, 2);

  fs.writeFileSync(dest, content);

  console.log(tap() + green('builded') + ' ' + file);
}

module.exports = {
  getSource: getSource,
  createTheme: createTheme
}
