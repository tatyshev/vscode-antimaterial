const fn = require('./fn');
const base = fn.getSource('base');
const monokai = fn.getSource('monokai');

fn.createTheme('Antimaterial.json', base);
fn.createTheme('Antimaterial Monokai.json', monokai);
