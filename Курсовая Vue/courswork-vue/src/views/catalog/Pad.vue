<template>
<div class="cont">
    <div class="phone col-6" v-for="pad in allPad" :key="pad.id">
    <h2>{{pad.title}}</h2>
    <img :src="pad.img" height="250">
    <p>{{pad.description}}</p>
    <p><b>Цена: </b>{{pad.price}} руб</p>
    <p><button type="button">Добавить в корзину</button></p>
    <router-link :to="{name: 'Pad', params: {id: pad.id}}">Подробнее ➦</router-link>
    
  </div>
  </div>
    <router-view></router-view>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    name: "Pad", // allPhone
    computed: {
      ...mapGetters(['allPad'])
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