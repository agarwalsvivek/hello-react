# hello-react

From https://www.fullstackfoundations.com/blog/react18-typescript-webpack-vanilla-setup#

# As a brief overview, here's what each dependency is primarily for:

## react, react-dom - our React app!

## @types/\* and typescript - TypeScript type definitions and compiler

## webpack, webpack-cli, webpack-dev-server -

### for running webpack builds via command line (see scripts in package.json) and serving in local dev

## ts-loader, style-loader, css-loader - the loaders that Webpack will use to properly bundle our TypeScript and CSS files.

## copy-webpack-plugin - this copies the /public directory to /dist so that /dist has everything needed to run an app!

## ts-node - mainly used to actually run Webpack (since we defined the Webpack config as a .ts file)
