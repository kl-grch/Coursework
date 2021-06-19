<template>
    <router-view></router-view>

<div class="cont">
    <div class="phone col-6" v-for="phone in allPhone" :key="phone.id">
    <h2>{{phone.title}}</h2>
    <img :src="phone.img" height="250">
    <p>{{phone.description}}</p>
    <p><b>Цена: </b>{{phone.price}} руб</p>
    <p><button type="button">Добавить в корзину</button></p>
    <router-link :to="{name: 'Phone', params: {id: phone.id}}">Подробнее ➦</router-link>
  </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    name: "Phone", // allPhon
    computed: {
      ...mapGetters(['allPhone'])
    },
      created(){
    // обращение к actions
    // this.$store.dispatch('loadData');
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