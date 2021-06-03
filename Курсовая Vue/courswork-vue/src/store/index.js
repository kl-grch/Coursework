import { createStore } from 'vuex'

export default createStore({
  state: {
    order: [], // товары в корзине
    username: [
      {user: "apple@gmail.com", password: "12345678"},
      {user: "mac@gmail.com", password: "8654321"}
    ],
    phone: [
      {
        id: 1,
        title: "iPhone 12 Pro",
        description: "iPhone 12 Pro - новинка от Apple c лучшенной камерой",
        img: "",
        price: 99990,
        order: false,
        memory: "128 Gb",
        color: "Черный",
        time: "10 часов",
        charge: "Быстрая зарядка",
        os: "iOS 14",
        camera: "12 MP"
      },
      {
        id: 2,
        title: "iPhone 12 Pro",
        description: "iPhone 12 Pro - новинка от Apple c лучшенной камерой",
        img: " ",
        price: 109990,
        order: false,
        memory: "512 Gb",
        color: "Белый",
        time: "10 часов",
        charge: "Быстрая зарядка",
        os: "iOS 14",
        camera: "12 MP"
      },
      {
        id: 3,
        title: "iPhone 12",
        description: "iPhone 12 - новинка от Apple в пурпурном цвете",
        img: " ",
        price: 75990,
        order: false,
        memory: "128 Gb",
        color: "Пурпурный",
        time: "10 часов",
        charge: "Быстрая зарядка",
        os: "iOS 14",
        camera: "12 MP"
      },
      {
        id: 4,
        title: "iPhone 12",
        description: "iPhone 12 - новинка от Apple в цвете (RED) *часть денег отправляется на благотворительность",
        img: " ",
        price: 75990,
        order: false,
        memory: "128 Gb",
        color: "(RED)",
        time: "10 часов",
        charge: "Быстрая зарядка",
        os: "iOS 14",
        camera: "12 MP"
      }
    ],
    mac: [
        {
          id: 5,
          title: "iMac",
          description: "iMac на чипе M1",
          img: " ",
          price: 150000,
          order: false,
          memory: "512 Gb",
          color: "Оранжевый",
          os: "Mac OS",
          camera: "5 MP",
          cheap: "M1"
        },
        {
          id: 6,
          title: "Mac Pro",
          description: "iMac на чипе M1",
          img: " ",
          price: 500000,
          order: false,
          memory: "2056 Gb",
          color: "Серый",
          os: "Mac OS",
          camera: "",
          cheap: "Intel"
        },
        {
          id: 7,
          title: "HDR Display",
          description: "HDR Display - монитор для Mac Pro",
          img: " ",
          price: 150000,
          order: false,
          memory: "",
          color: "Серый",
          os: "",
          camera: "",
          cheap: ""
        },
        {
          id: 8,
          title: "MacBook Air",
          description: "MacBook Air - тонкий инструмент для вдохновения",
          img: " ",
          price: 110000,
          order: false,
          memory: "256 Gb",
          color: "Золотой",
          os: "Mac OS",
          camera: "5 MP",
          cheap: "Intel"
        },
        {
          id: 9,
          title: "MacBook Pro",
          description: "MacBook Pro - на чипе M1",
          img: " ",
          price: 250000,
          order: false,
          memory: "512 Gb",
          color: "Серый",
          os: "Mac OS",
          camera: "5 MP",
          cheap: "M1"
        }
    ],
    pad: [
      {
      id: 10,
      title: "iPad Air",
      description: "iPad Air - для креативной работы, где угодно",
      img: " ",
      price: 99000,
      order: false,
      memory: "256 Gb",
      color: "Серебряный",
      time: "10 часов",
      charge: "Быстрая зарядка",
      os: "iOS 14",
      camera: "12 MP"
    },
    {
      id: 11,
      title: "iPad 2020",
      description: "iPad 2020 - для учёбы и просмотра видео",
      img: " ",
      price: 35000,
      order: false,
      memory: "256 Gb",
      color: "Серебряный",
      time: "10 часов",
      charge: "Быстрая зарядка",
      os: "iOS 14",
      camera: "12 MP"
    },
    {
      id: 12,
      title: "iPad mini",
      description: "iPad mini - компактный инструмент",
      img: " ",
      price: 25000,
      order: false,
      memory: "256 Gb",
      color: "Серебряный",
      time: "10 часов",
      charge: "Быстрая зарядка",
      os: "iOS 14",
      camera: "12 MP"
    }
  ],
  accses: [
    {
      id: 13,
      title: "Кабель для зарядки",
      description: "Lightning (1 м) - usb type",
      img: " ",
      price: 1500,
      order: false,
      color: "Белый",
      charge: "Быстрая зарядка",
    },
    {
      id: 14,
      title: "Адаптер для зарядки 15W",
      description: "Адаптер для быстрой зарядки",
      img: " ",
      price: 3500,
      order: false,
      color: "Белый",
      charge: "Быстрая зарядка",
    },
    {
      id: 15,
      title: "Magic Mouse",
      description: "Мышь для плавных и уверенных движений",
      img: " ",
      price: 5000,
      order: false,
      color: "Белый",
      charge: "",
    },
    {
      id: 16,
      title: "Magic Keybord",
      description: "Клавиатура с цыфровым вводом",
      img: " ",
      price: 5000,
      order: false,
      color: "Белый",
      charge: "",
    }
  ]},
  getters: {
    orderPhone(state){
      return state.phone.filter(phone => phone.order)
    },
    orderMac(state){
      return state.mac.filter(mac => mac.order)
    },
    orderPad(state){
      return state.pad.filter(pad => pad.order)
    },
    orderAccses(state){
      return state.accses.filter(accses => accses.order)
    },
    // finishedBookCount(state,getters){
    //   return getters.finishedBooks.length;
    // },
    phoneById: state => (id) => { // вместо id можно передать любые данные 
      return state.phone.filter(phone => phone.id == id)[0];
    },
    macById: state => (id) => { 
      return state.mac.filter(mac => mac.id == id)[0];
    },
    padById: state => (id) => { 
      return state.pad.filter(pad => pad.id == id)[0];
    },
    accsesById: state => (id) => { 
      return state.accses.filter(accses => accses.id == id)[0];
    }
  },
  mutations: {
    // shareBook(state, book){
    //   state.shared.push(book);
    // },
    // markRead(state, index){
    //   state.usersBook[index].finished = true;
    // }
  },
  actions: {
  },
  modules: {
  }
})
