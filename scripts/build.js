const fn = require('./fn');
const base = fn.getSource('base');
const solarized = fn.getSource('solarized');
const monokai = fn.getSource('monokai');

fn.createTheme('Antimaterial.json', base);
fn.createTheme('Antimaterial Solarized.json', solarized);
fn.createTheme('Antimaterial Monokai.json', monokai);
