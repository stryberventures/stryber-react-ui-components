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

## Bit: use each component as separate library

### Setup Bit in your project

To use components from our **[Bit.dev/Stryber/Matterhorn](https://bit.dev/stryber/matterhorn)** repo you have to create `.npmrc` file in your project's root directory, and place the following code inside:

```shell
@bit:registry=https://node.bit.dev
always-auth=true
```

### Bit CLI setup

To install Bit CLI use:

```shell
npm install bit-bin -g
```
(if you got error on Mac try: `sudo npm install bit-bin -g`)

### Add new component to Bit repo

To add new component to our bit repo run in terminal(after you've created it):
```shell
bit add src/components/CompoentFolderName --exclude 'src/components/{PARENT}/*.stories.tsx'
```

Where:
* `src/components/CompoentFolderName` – path to your component.

    Here `CompoentFolderName` is the name of the folder where you store your component

* `--exclude 'src/components/{PARENT}/*.stories.tsx'` – way to exclude files from tracking.

    Here `{PARENT}` is variable and in our case it will be automatically recognized as `CompoentFolderName`.

    `*.stories.tsx` will select all file names that end in .stories.tsx

### Update existing component

To update existing component workflow stays the same as it was. All changes will be automatically applied to component in bit repo after your changes will be merged to `dev` branch(you can check whole process in github action `bit-export.yml`).

### Build Bit component(optional)

You can build Bit component locally by running:

```shell
bit build
```
You will find your component in `/dist` folder

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
