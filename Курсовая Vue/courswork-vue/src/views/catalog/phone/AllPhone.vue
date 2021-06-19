<template>
  <!-- <div>{{$route.params.id}}</div> -->
  <h2>{{phone.title}}</h2>
  <div>
      <img :src="phone.img" height="500">
      <div>Тут будет карусель из 3 фото</div>
      <p>{{phone.fullDescription}}</p>
      <p>Цена: <b>{{phone.price}}</b> руб</p>
      <p><button type="button">Добавить в корзину</button></p>

  </div>
</template>

<script>
export default {
    name: "AllPhone",
    computed: {
        phone() {
            return this.$store.getters.phoneById(this.$route.params.id);
        }
    }
}
</script>

<style scoped>

</style>