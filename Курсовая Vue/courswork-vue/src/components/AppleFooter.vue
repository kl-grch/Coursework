<template>
<footer :style="{backgroundColor: background}">
<div class="support">
    <img src="https://3mu.ru/wp-content/uploads/2019/10/ikonka-telefona-dliya-vizitki-05.png" height="30">
    <p><b>Поддержка: </b>+7 (905) 999-88-77</p>
    <img src="http://s1.iconbird.com/ico/2013/12/518/w128h1281386957011MissionControl012.png" height="30">
    <p><b>Написать нам: </b>apple@gmail.com</p>
</div>    
</footer>
  
</template>

<script>
export default {
    name: "AppleFooter",
    props: {
    background: String,
}
}
</script>

<style scoped>
 footer {
    position: fixed; /* Фиксированное положение */
    left: 0; bottom: 0; /* Левый нижний угол */
    padding: 10px; /* Поля вокруг текста */
    color: #fff; /* Цвет текста */
    width: 100%; /* Ширина слоя */
   }

   .support {
       display: flex;
       justify-content: center;
   }
   img{
       margin-left: 10px;
       margin-right: 10px;
   }
</style>