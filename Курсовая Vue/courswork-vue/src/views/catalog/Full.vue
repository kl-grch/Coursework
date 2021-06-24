<template>
  <div class="info">
      <h2>{{full.title}}</h2>
      <img :src="full.img" height="500">
      <div>
          <img class="gallery" :src="full.img1" height="100">
          <img class="gallery" :src="full.img2" height="100">
          <img class="gallery" :src="full.img3" height="100">
      </div>
КАРУСЕЛЬ

<div style="height:500px">
    <div class="preview">
        <img :src='full.img' class="media" height="500"/>
    </div>
    <div class="btn-group">
        <button id="0" @:click="getImg">
            <img class="gallery" :src="full.img" height="100">
        </button>
        <button id="1" @:click="getImg($event)">
            <img class="gallery" :src="full.img1" height="100">
        </button>
        <button id="2" @:click="getImg($event)">
            <img class="gallery" :src="full.img2" height="100">
        </button>
        <button id="3" @:click="getImg($event)">
            <img class="gallery" :src="full.img3" height="100">
        </button>
    </div>
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
        }
    },
    methods: {
        order(full){
            this.$store.commit('addToOrder', {device: full});
        },
        getImg: function(){
            this.img1 = this.img2;
        }
        }
}
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
}

</style>