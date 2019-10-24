npm i -g typescript
tsc -version

tsc --init

target : es6
outdir:
rootDir:
"moduleResolution": "node"

npm i -D typescript ts-node nodemon @types/node @types/express


package.json
"scripts": {
    "start": "node dest/app.js",
    "dev" : "nodemon src/app.ts",
    "build" : "tsc -p ."
  },

      
      npm run dev
