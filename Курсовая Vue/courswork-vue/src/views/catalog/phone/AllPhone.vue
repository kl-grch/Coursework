<template>
  Телефоны
  <div>{{$route.params.id}}</div>
  <h2>{{phone.title}}</h2>
  <div>
      <img :src="phone.img">
      <p>{{phone.price}}</p>
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