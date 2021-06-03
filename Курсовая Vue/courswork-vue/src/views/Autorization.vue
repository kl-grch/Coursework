<template>

<div class="autorazation">
  <vee-form action="#" method="" class="col-5">
    <div>
    <input type="email" placeholder="Введите email" class="size">
    </div>
    <div>
    <input type="password" placeholder="Введите пароль" class="size">
    </div>
    <div class="memory">
    <label><input type="checkbox" checked>Запомнить</label>
    </div>
    <input type="submit" value="Вход" class="enter size">
  </vee-form>
</div>
</template>

<script>
// import {Form, Field, ErrorMessage, configure} from 'vee-validate';
// import * as yup from 'yup';
// import {mapMutations} from "vuex";

export default {
    name: "Autorization"
}
</script>

<style scoped>

.size {
  width: 100%;
  margin: 10px;
}

.autorazation {
  display: flex;
  align-items: center;
  justify-content: center;
}

vee-form {
  border: solid black;
  padding: 40px;
  margin-top: 200px;
}

.memory {
  display: flex;
  align-items: center;
  justify-content: center;
}



</style>