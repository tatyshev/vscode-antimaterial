const { updateTokens } = require('./fn');

const MATERIAL_VER = 'latest';
const DRACULA_VER = 'latest';
const MONOKAI_VER = 'latest';
const CALAMITY_VER = 'latest';

const BASE_URL = 'https://marketplace.visualstudio.com/_apis/public/gallery/publishers';
const MATERIAL_URL = `${BASE_URL}/Equinusocio/vsextensions/vsc-material-theme/${MATERIAL_VER}/vspackage`;
const DRACULA_URL = `${BASE_URL}/dracula-theme/vsextensions/theme-dracula/${DRACULA_VER}/vspackage`;
const MONOKAI_URL = `${BASE_URL}/monokai/vsextensions/theme-monokai-pro-vscode/${MONOKAI_VER}/vspackage`;
const CALAMITY_URL = `${BASE_URL}/Pustur/vsextensions/calamity-vscode/${CALAMITY_VER}/vspackage`;

(async () => {
  await updateTokens({
    take: MATERIAL_URL,
    file: "extension/themes/Material-Theme-Default.json",
    writeTo: "sources/base/tokens.js"
  })

  await updateTokens({
    take: DRACULA_URL,
    file: "extension/theme/dracula.json",
    writeTo: "sources/dracula/tokens.js"
  })

  await updateTokens({
    take: MONOKAI_URL,
    file: "extension/themes/Monokai Classic.json",
    writeTo: "sources/monokai/tokens.js"
  })

  await updateTokens({
    take: CALAMITY_URL,
    file: "extension/themes/Calamity-color-theme.json",
    writeTo: "sources/calamity/tokens.js"
  })

  console.log('🐥  Yahoooo!')
})()
