<template>
  iPhone
    <div>{{$route.params.id}}</div>
  <h2>{{phone.title}}</h2>
  <div>
    <img :src="phone.img">
    <p>{{phone.description}}</p>
    <p>Цена:<b>{{phone.price}}</b> руб</p>
  </div>
</template>

<script>
export default {
    name: "Phone",
    computed: {
      phone(){
        return this.$store.getters.phoneById(this.$route.params.id);
      }
    }
}
</script>

<style scoped>

</style>