# Gridsome shopping cart example using Vuex with modules

[![Netlify Status](https://api.netlify.com/api/v1/badges/0c291833-70c6-4f6a-b994-323e9eceb22d/deploy-status)](https://app.netlify.com/sites/gridsome-vuex-shopping-cart/deploys)

An example Gridsome static site using Vue and Vuex with modules for shopping cart functionality.

This example site uses [Vuex shared mutations](https://github.com/xanf/vuex-shared-mutations) so that the shopping cart is syncronised across tabs. It also uses [Vuex persistedstate](https://github.com/robinvdvleuten/vuex-persistedstate) so that the cart is stored locally, so if you revisit the site the shopping cart isn't lost.

## Example Site

[https://gridsome-vuex-shopping-cart.netlify.app/](https://gridsome-vuex-shopping-cart.netlify.app/)


## Install dependencies
```sh
yarn install
```

## Build
```sh
gridsome build
```

## Develop
```sh
gridsome develop
```

