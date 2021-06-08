<template>
<div class="cont">
    <div class="phone col-6" v-for="accses in allAccses" :key="accses.id">
    <h2>{{accses.title}}</h2>
    <img :src="accses.img" height="250">
    <p>{{accses.description}}</p>
    <p><b>Цена: </b>{{accses.price}} руб</p>
    <p><button type="button">Добавить в корзину</button></p>
    <router-link :to="{name: 'Accses', params: {id: accses.id}}">Подробнее ➦</router-link>
    
  </div>
  </div>
    <router-view></router-view>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    name: "Accses", // allPhone
    computed: {
      ...mapGetters(['allAccses'])
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
  display: block;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
}

.cont {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  justify-items: center;
  margin-bottom: 100px;
}

</style>