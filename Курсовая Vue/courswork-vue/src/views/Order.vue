<template>
  <div class="order">
    <div v-if="$store.state.order.length">
          <h2>Выбранные товары</h2>
      <table class="table" cellspacing="20">
        <tr>
          <th>#</th>
          <th>Фото</th>
          <th>Товар</th>
          <th>Цена/шт</th>
          <th>Количество</th>
          <th>🗑</th>
        </tr>
        <tr v-for="item in $store.state.order" :key="item.id">
          <td>
            <li v-for="(item, index) in $store.state.order" :key="index">{{index+1}}</li>
            </td>
          <td><img :src="item.img" height="100"></td>
          <td>
            <router-link :to="{name:'Full', params: {id: item.id}}" class="title">{{item.title}}</router-link>
          </td>
          <td>{{item.price}} ₽</td>
          <td>
                  <span @click="less(item)">⊖</span>{{item.quantity}}<span @click="more(item)">⊕</span>
          </td>
          <td>
            <button class="del" type="button" @click="dellete(item)">✘</button>
            </td>
        </tr>
        <tr>
          <th colspan="4" class="price">Итого: {{$store.state.totalSum}} ₽</th>
        </tr>
      </table>
      <button class="button" type="button" @click="clearOrder">Очистить корзину</button> 


    </div>
    <div v-else>
          <h2>Добавьте товары в корзину</h2>
    </div>
    
  </div>
</template>

<script>
import {mapMutations} from 'vuex';
export default {
    name: "Order",

    methods: {
        less(item){
            this.$store.commit('getLess', {device: item});
        },
         more(item){
            this.$store.commit('getMore', {device: item});
        },
        dellete(item){
          this.$store.commit('removeFromOrder', {device: item});
        },
            ...mapMutations(['clearOrder'])


    }
}
</script>

<style scoped>

.order {
text-align: center;
}

.table {
  width: 800px;
  border: solid black 1px;
  margin: auto;
  background-color:whitesmoke;
  }

.price {
  text-align: center;
}

.button {
  width: 800px;
  margin-bottom: 100px;
}

.title {
  color: orangered;
  text-decoration: none;
  text-transform:uppercase;
}

.del {
  color: red;
  border: none;
}
</style>