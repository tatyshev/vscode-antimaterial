const fn = require('./fn');
const base = fn.getSource('base');
const monokai = fn.getSource('monokai');
const dracula = fn.getSource('dracula');

fn.createTheme('Antimaterial.json', base);
fn.createTheme('Antimaterial Monokai.json', monokai);
fn.createTheme('Antimaterial Dracula.json', dracula);
