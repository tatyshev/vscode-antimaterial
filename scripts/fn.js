const download  = require('download');
const StreamZip = require('node-stream-zip');
const Color     = require('tinycolor2');
const rimraf    = require('rimraf');
const fs        = require('fs');
const path      = require('path');

function random36() {
  return Math.random().toString(36).substr(2);
}

function ensureFolder(name) {
  const folder = path.resolve(name)
  if (!fs.existsSync(folder)) fs.mkdirSync(folder)
}

function fetchZip(url) {
  return new Promise((resolve, reject) => {
    download(url).then(data => {
      const file = path.resolve(`./tmp/${random36()}.zip`);

      fs.writeFileSync(file, data)

      const zip = new StreamZip({
        file,
        storeEntries: true
      });

      zip.on('error', err => reject(err))

      zip.on('ready', () => {
        resolve(zip)
      })
    })
    .catch(reject)
  })
}

function getZipJson(zip, file) {
  return new Promise((resolve, reject) => {
    const tmpPath = path.resolve(`./tmp/${random36()}`);

    zip.extract(file, tmpPath, err => {
      if (err) {
        reject(err)
        return
      }

      const data = fs.readFileSync(tmpPath)
      resolve(JSON.parse(data))
    });
  })
}

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
  const p = path.resolve(`./sources/${name}`);
  return require(p);
}

function createTheme (file, theme) {
  const dest = path.resolve(`./themes/${file}`);
  const content = JSON.stringify(theme, replacer, 2);

  fs.writeFileSync(dest, content);

  console.log(tap() + green('builded') + ' ' + file);
}

async function updateTokens({ take, file, writeTo }) {
  process.stdout.write(`🐣  Updating tokens for ${writeTo} `)
  ensureFolder('./tmp')

  const zip = await fetchZip(take);
  const json = await getZipJson(zip, file);
  const tokens = JSON.stringify(json.tokenColors, null, 2);

  fs.writeFileSync(path.resolve(writeTo), `module.exports = ${tokens};`)
  zip.close()
  rimraf.sync(path.resolve('./tmp'))

  console.log('✅');
}

module.exports = {
  fetchZip,
  getZipJson,
  updateTokens,
  fetchZip,
  getSource,
  createTheme
}
