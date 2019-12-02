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

## Using the library within other projects ##
Projects that would use this package have two options 
of how to install and import this *private* library 
within our organization:

a) Install as an NPM package from GitHub registry 
(THE RIGHT WAY). 
1) Create an '.npmrc' file at the 
root of the project that will be using
Matterhorn library.

'.npmrc' file contents:

```text
@stryberventures:registry=https://npm.pkg.github.com/stryberventures
```

2) Authorize to your GitHub account and create a new
'Personal Access Token' (https://github.com/settings/tokens).
This token should have *read:packages* permission checked.

3) Copy the created TOKEN and use it to create an
'~/.npmrc' file  located in the '~' (home) folder 
of your user:

```text
//npm.pkg.github.com/:_authToken=TOKEN
```

4) After this The package can be installed by typing
the following command in the terminal:

```shell script
npm i @stryberventures/stryber-react-ui-components@0.0.8 --save
```

b) Install directly from the git repository's
URL by typing the following command in the 
terminal (THE EASIER WAY):

```shell script
npm i git+ssh://git@github.com/stryberventures/stryber-react-ui-components.git#0.0.8
```

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
//npm.pkg.github.com/:_authToken=TOKEN
```

_Note: Full guide can be found here
https://help.github.com/en/github/managing-packages-with-github-package-registry/configuring-npm-for-use-with-github-package-registry_

3) Publish this package to GitHub npm registry by
running following command(s) in the terminal:

```shell script
npm publish
```
