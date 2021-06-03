<template>
<div>Выберите категорию товаров</div>
<apple-header :tabs="tabs" background="black"></apple-header>
<router-view></router-view>
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

<style>

</style>