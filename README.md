# Stryber React UI Components (Matterhorn) #

## Description ##

UI library for React

## How to Run in Storybook mode (for demo and development purposes) ##

1) Run following commands in the terminal:

```shell script
npm i
npm start
```

2) Browse to 'http://localhost:9001/'
(should normally open automatically after step 1)

## How to build library for production ##

```shell script
npm i
npm run build
```

## How to publish library to GitHub npm registry (Beta)

1) Create a personal access token in the
"Developer settings" page on GitHub
(https://github.com/settings/tokens)

_Note: Your account must have appropriate GitHub
permissions for you to be able to publish it_

2) Create '~/.npmrc' file:

```text
//npm.pkg.github.com/:_authToken=PERSONAL-ACCESS-TOKEN
```

_Note: Full guide can be found here
https://help.github.com/en/github/managing-packages-with-github-package-registry/configuring-npm-for-use-with-github-package-registry_

3) Publish this package to GitHub npm registry by
running following command(s) in the terminal:

```shell script
npm publish
```

4) Projects that would use
this internal company's package 
have two options of how to install
and import the library:

a) Install directly from the git repository's
URL by typing the following command in the 
terminal:

```shell script
npm i git+ssh://git@github.com/stryberventures/stryber-react-ui-components.git#dev
```

b) (DOESN'T WORK RIGHT NOW) Should have '.npmrc' file located 
at the root of the project.

'.npmrc' file contents:

```text
registry=https://npm.pkg.github.com/stryberventures
```

After which they can install the package by typing
the following command in the terminal
```shell script
npm i @stryberventures/stryber-react-ui-components
```
