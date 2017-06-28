const fn = require('./fn');
const base = fn.getSource('base');
const solarized = fn.getSource('solarized');

fn.createTheme('Antimaterial.json', base);
fn.createTheme('Antimaterial Solarized.json', solarized);
