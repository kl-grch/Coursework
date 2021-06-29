<template>
  <div class="info">
      <h2>{{full.title}}</h2>
      <img :src="selected" height="500">
      <div>
          <img class="gallery" :src="full.img1" height="100" @click="getImg(full.img1)">
          <img class="gallery" :src="full.img2" height="100" @click="getImg(full.img2)">
          <img class="gallery" :src="full.img3" height="100" @click="getImg(full.img3)">
          <img class="gallery" :src="full.img" height="100" @click="getImg(full.img)">
      </div>
      <p>{{full.fullDescription}}</p>
      <p>Цена: <b>{{full.price}}</b> ₽</p>
      <p><button @click="order(full)" type="button">Добавить в корзину</button></p>
  </div>

</template>

<script>
export default {
    name: 'Full',
    computed: {
        full() {
            return this.$store.getters.getDeviceById(this.$route.params.id);
        },
    },
    data: function(){
        return {
            selected: ''
        }
    },
    beforeMount(){
        this.selected = this.full?.img;
    },
    methods: {
        order(full){
            this.$store.commit('addToOrder', {device: full});
        },
        getImg: function getImg(src) {
            this.selected = src;
        },
},
};
</script>

<style scoped>

.info {
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 100px;
}

.gallery {
    margin-right: 10px;
    margin-left: 10px;
    cursor: pointer;
}

</style>