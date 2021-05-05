

<p align="center">Material Design for Vue.js</p>


Vue Material is Simple, lightweight and built exactly according to the Google <a href="http://material.google.com" target="_blank">Material Design</a> specs

## Demo and Documentation

<a href="https://culqi-ui.xaviergz.com/" target="_blank">Documentation & demos</a>

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

NEXT JS CONFIG

``` bash
  yarn add -D nuxt-vue-culqi-ui
```

``` JSON
  {
    ...

     modules: [
    'nuxt-vue-culqi-ui',
    ...
  ],

    ...
  }
```


Fork https://vuematerial.io/