# Stryber React UI Components (Matterhorn) #

## Description ##

UI library for React

## How to Run in Storybook mode (for demo and development purposes) ##

1) Run following commands in the terminal:

```shell script
docker-compose up --build dev
```

2) Browse to [http://localhost:9001/](http://localhost:9001/)

## Using the library within other projects ##
You can install whole library by running this command inside your project:
```shell script
npm i --save @stryberventures/stryber-react-ui-components
# or
yarn add @stryberventures/stryber-react-ui-components
```
**Or** you can install each component separately using our bit collection:

Go to **[Bit.dev/Stryber/Matterhorn](https://bit.dev/stryber/matterhorn)** and chose component that you need to install

## How to build the library for production ##

```shell script
npm i
npm run build
```

## How to publish the library to NPM

```shell script
npm publish --access public
```

## Testing

To run tests:
```bash
docker-compose up --build test
```
