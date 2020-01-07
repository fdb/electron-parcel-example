# electron-parcel-example

Simple example application that shows how to use Electron, Parcel and Preact together.

In development mode, we start a Parcel dev server in the main process of Electron.
In production mode, we bundle everything up and ship it together with the rest of the app.

## Development

```
yarn
yarn start
```

This automatically opens the Chrome dev tools.

## Production

```
yarn
yarn dist
```

Production files will end up in the `dist/` folder.

By default the `dist` script will create a package for your host platform. You can customize the dist script in `package.json` to build versions for Mac, Windows or Linux.

Change the following line in `package.json` to include the desired builds, e.g.:

```
"dist": "rm -rf dist && npm run build && electron-builder build --mac --win",
```
