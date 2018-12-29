const { updateTokens } = require('./fn');

const MATERIAL_URL = 'https://marketplace.visualstudio.com/_apis/public/gallery/publishers/Equinusocio/vsextensions/vsc-material-theme/2.6.3/vspackage';
const DRACULA_URL = 'https://marketplace.visualstudio.com/_apis/public/gallery/publishers/dracula-theme/vsextensions/theme-dracula/2.15.0/vspackage';
const MONOKAI_URL = 'https://marketplace.visualstudio.com/_apis/public/gallery/publishers/monokai/vsextensions/theme-monokai-pro-vscode/1.1.9/vspackage';
const CALAMITY_URL = 'https://marketplace.visualstudio.com/_apis/public/gallery/publishers/Pustur/vsextensions/calamity-vscode/1.2.3/vspackage';

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
})()
