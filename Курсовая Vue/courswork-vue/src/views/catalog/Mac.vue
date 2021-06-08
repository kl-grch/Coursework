<template>
<div class="cont">
    <div class="phone col-6" v-for="mac in allMac" :key="mac.id">
    <h2>{{mac.title}}</h2>
    <img :src="mac.img" height="250">
    <p>{{mac.description}}</p>
    <p><b>Цена: </b>{{mac.price}} руб</p>
    <p><button type="button">Добавить в корзину</button></p>
    <router-link :to="{name: 'Mac', params: {id: mac.id}}">Подробнее ➦</router-link>
    
  </div>
  </div>
    <router-view></router-view>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    name: "Mac", // allPhone
    computed: {
      ...mapGetters(['allMac'])
    },
      created(){
    // обращение к actions
    this.$store.dispatch('loadData');
  }
}


</script>

<style scoped>

a {
  text-decoration: none;
  color: brown;
}

.phone {
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
}

.cont {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  justify-items: center;
  margin-bottom: 100px;
}

</style>