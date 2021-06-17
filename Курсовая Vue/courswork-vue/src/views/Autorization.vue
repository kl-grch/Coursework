<template>
<div class="autorazation">
  <vee-form :validation-schema="rules" @submit="sendData" class="col-5 form">
    <div>
    <vee-field name="email" type="email" placeholder="Введите email" class="size"/>
    <vee-error name="email"/>
    </div>
    <div>
    <vee-field name="password" type="password" placeholder="Введите пароль" class="size"/>
    <vee-error name="password"/>
    </div>
    <div class="memory">
    <label><input type="checkbox" checked>Запомнить</label>
    </div>
    <input type="submit" value="Вход" class="enter size">
  </vee-form>
</div>
</template>

<script>
import {Form, Field, ErrorMessage, configure} from 'vee-validate';
import * as yup from 'yup';
// import {mapMutations} from "vuex";

configure({
  validateOnInput: true
});

export default {
  name: "Autorization",
  components: {
    VeeForm: Form, // границы форм
    VeeField: Field, // поле формы, по умолчанию input
    VeeError: ErrorMessage // элемент html для вывода ошибок
  },
  data (){
    return {
      rules: yup.object({
        email: yup.string().trim().required('Введите email').email('Логин должен быть в формате admin@gmail.com'),
        password: yup.number().required('Введите password').min(6, 'Минимальное количество символов 8').typeError('Пароль должен состоять из цифр')
      })
    }
  }
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

.form {
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