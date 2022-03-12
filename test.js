lerna create @mmt-ui-lib/ui-lib --yes
lerna create @mmt-ui-lib/ui-lib-button --yes
lerna create @mmt-ui-lib/ui-lib-text --yes
lerna create @mmt-ui-lib/ui-lib-builder --yes


lerna add @mmt-ui-lib/ui-lib-button --scope=@mmt-ui-lib/ui-lib

lerna add @mmt-ui-lib/ui-lib-text --scope=@mmt-ui-lib/ui-lib

lerna add react --dev --scope '{@mmt-ui-lib/ui-lib-button,@mmt-ui-lib/ui-lib-text}'

lerna add react@16.x --peer --scope '{@mmt-ui-lib/ui-lib-button,@mmt-ui-lib/ui-lib-text}'

lerna add clsx --scope '{@mmt-ui-lib/ui-lib-button,@mmt-ui-lib/ui-lib-text}'  


"scripts": {
  "build": "ui-lib-builder"
}


"bin": {
  "ui-lib-builder": "./lib/ui-lib-builder.js"
},

#!/usr/bin/env node
console.log('Woo');


chmod +x packages/ui-lib-builder/lib/ui-lib-builder.js

lerna add @mmt-ui-lib/ui-lib-builder --dev --scope '{@mmt-ui-lib/ui-lib,@mmt-ui-lib/ui-lib-button,@mmt-ui-lib/ui-lib-text}'


"scripts": {
  "build": "ui-lib-builder",
  "test": "echo \"Error: run tests from root\" && exit 1"
},

lerna run build


lerna bootstrap


chmod +x packages/ui-lib-builder/lib/ui-lib-builder.js


lerna add react-dom --dev --scope '{@mmt-ui-lib/ui-lib-button,@mmt-ui-lib/ui-lib-text}'


lerna add rollup-plugin-postcss --scope=@mmt-ui-lib/ui-lib-builder