<template>
<div class="line"></div>
<apple-header :tabs="tabs" background="dimgrey" color="red">
</apple-header>
<router-view></router-view>

<div class="catalog" v-if="$route.path.endsWith('catalog')">
<div class="col-6">
  <h2>iPhone</h2>
  <router-link to="/catalog/phone">
  <img src="https://mobilebulgaria.com/img/cms/750/774750.jpg">
  </router-link>
</div>
<div class="col-6">
  <h2>iPad</h2>
  <router-link to="/catalog/pad">
  <img src="https://3dnews.ru/assets/external/illustrations/2020/09/15/1020709/00.jpg">
  </router-link>
</div>
<div class="col-6">
  <h2>iMac</h2>
  <router-link to="/catalog/mac">
  <img src="https://commons.bmstu.wiki/images/a/a4/06-Mac-5-Year-Forecast.jpg">
  </router-link>
</div>
<div class="col-6">
  <h2>Аксессуары</h2>
  <router-link to="/catalog/accses">
  <img src="https://export.sulpak.kz/promo/apple/img/axes/mac_main.jpg">
  </router-link>
</div>
</div>

</template>

<script>
import AppleHeader from '@/components/AppleHeader'
export default {
    name: "Catalog",
    components: {AppleHeader},
    data(){
      return {
        tabs: [
          {name: "iPhone", path: "/catalog/phone"},
          {name: "iMac", path: "/catalog/mac"},
          {name: "iPad", path: "/catalog/pad"},
          {name: "Аксессуары", path: "/catalog/accses"}
        ]
      }
    }
}
</script>

<style scoped>
.line{
margin-top: 4px;}

.catalog {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 100px;
} 

img {
  height: 400px;
  width: auto;
}

.col-6 {
  margin-top: 20px;
}

.apple {
  display: none;
}

</style>