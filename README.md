<p align="center">
  <a href="https://vuematerial.io/" target="_blank">
    <img width="150" src="https://vuematerial.io/assets/logo-color.png">
  </a>
</p>

<p align="center">Material Design for Vue.js</p>

<p align="center">
  <a href="https://travis-ci.org/vuematerial/culqi-ui">
    <img src="https://travis-ci.org/vuematerial/culqi-ui.svg?branch=master" alt="Build Status">
  </a>

  <a href="https://www.npmjs.com/package/culqi-ui">
    <img src="https://img.shields.io/npm/dt/culqi-ui.svg" alt="Downloads">
  </a>

  <a href="https://www.npmjs.com/package/culqi-ui">
    <img src="https://img.shields.io/npm/l/culqi-ui.svg" alt="License">
  </a>

  <a href="https://discord.gg/vuematerial">
    <img src="https://img.shields.io/discord/379653048798281729.svg?logo=discord&colorB=7289DA" alt="Chat">
  </a>
</p>

Vue Material is Simple, lightweight and built exactly according to the Google <a href="http://material.google.com" target="_blank">Material Design</a> specs

Build well-designed apps that can fit on every screen with support to all modern Web Browsers with dynamic themes, components on demand and all with an ease-to-use API

## Demo and Documentation

<a href="https://vuematerial.io/" target="_blank">Documentation & demos</a>

<a href="https://github.com/vuematerial/examples" target="_blank">Examples</a>

If you are trying to find the documentation for previous versions, please go to <a href="https://culqi-ui-old.netlify.com">old website</a>.

## Installation and Usage

Install Vue Material through npm or yarn

``` bash
npm install culqi-ui --save
yarn add culqi-ui
```

<small>* Others package managers like JSPM and Bower are not supported yet.</small>

Import or require Vue and Vue Material in your code:

``` javascript
import Vue from 'vue'
import VueMaterial from 'culqi-ui'
import 'culqi-ui/dist/culqi-ui.min.css'

Vue.use(VueMaterial)
```

Or use individual components:

``` javascript
import Vue from 'vue'
import { MdButton, MdContent, MdTabs } from 'culqi-ui/dist/components'
import 'culqi-ui/dist/culqi-ui.min.css'

Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)
```

Alternatively you can <a href="https://github.com/vuematerial/culqi-ui/archive/master.zip" target="_blank" rel="noopener">download</a> and reference the script and the stylesheet in your HTML:

``` html
<link rel="stylesheet" href="path/to/culqi-ui.css">
<script src="path/to/culqi-ui.js"></script>
```

Optionally import Roboto font & Material Icons from Google CDN:

``` html
<link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic|Material+Icons">
```