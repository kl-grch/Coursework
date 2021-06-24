<template>
    <router-view></router-view>

<div class="cont">
    <div class="phone col-6" v-for="item in allPhone" :key="item.id">
    <h2>{{item.title}}</h2>
    <img :src="item.img" height="250">
    <p>{{item.description}}</p>
    <p><b>Цена: </b>{{item.price}} ₽</p>
    <p><button type="button" @click="order(item)">Добавить в корзину</button></p>
    <router-link :to="{name: 'Full', params: {id: item.id}}">Подробнее ➩</router-link>
  </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    name: "Phone", 
    computed: {
      ...mapGetters(['allPhone'])
    },
  methods:{
    order(item){
      this.$store.commit('addToOrder', {device: item});
    }
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

.catalog {
  display: none;
}

</style>