import { createStore } from 'vuex'

export default createStore({
  state: {
    order: [], // товары в корзине
    usersName: [
      {user: "apple@gmail.com", password: "12345678"},
      {user: "mac@gmail.com", password: "87654321"}
    ],
    usersPhone: [
      {
          id: 1,
          title: "iPhone 12 (RED)",
          img: "https://cdn.svyaznoy.ru/upload/iblock/c8b/ruru_iphone12_q121_product_red_pdp-image-1b.jpg",
          img1: "https://cdn.svyaznoy.ru/upload/iblock/26a/ruru_iphone12_q121_product_red_pdp-image-1a.jpg",
          img2: "https://cdn.svyaznoy.ru/upload/iblock/1ba/ruru_iphone12_q121_product_red_pdp-image-2.jpg",
          img3: "https://cdn.svyaznoy.ru/upload/iblock/098/ruru_iphone12_q121_product_red_pdp-image-3.jpg",
          description: "Смартфон Apple iPhone 12 64GB (PRODUCT)RED",
          fullDescription: "A14 Bionic, самый быстрый процессор iPhone. Дисплей OLED от края до края. И Ночной режим на всех камерах.",
          price: 73590,
          phone: true
      },
      {
          id: 2,
          title: "iPhone 12 Pro",
          img: "https://cdn.svyaznoy.ru/upload/iblock/7c9/ruru_iphone12pro_q121_pacificblue_pdp-image-1b.jpg",
          img1: "https://cdn.svyaznoy.ru/upload/iblock/3c8/ruru_iphone12pro_q121_pacificblue_pdp-image-1a.jpg",
          img2: "https://cdn.svyaznoy.ru/upload/iblock/cc4/ruru_iphone12pro_q121_pacificblue_pdp-image-2.jpg",
          img3: "https://cdn.svyaznoy.ru/upload/iblock/546/ruru_iphone12pro_q121_pacificblue_pdp-image-3.jpg",
          description: "Apple iPhone 12 Pro 128GB (тихоокеанский синий)",
          fullDescription: "A14 Bionic, самый быстрый процессор iPhone. И система камер Pro, которая гораздо лучше работает при слабом освещении, — а на iPhone 12 Pro Max ещё лучше.",
          price: 91990,
          phone: true

      },
      {
          id: 3,
          title: "iPhone SE",
          img: "https://cdn.svyaznoy.ru/upload/iblock/070/ruun_iphone-se_white_q220_pdp-image-1.jpg",
          img1: "https://cdn.svyaznoy.ru/upload/iblock/19c/ruun_iphone-se_white_q220_pdp-image-3.jpg",
          img2: "https://cdn.svyaznoy.ru/upload/iblock/234/ruun_iphone-se_white_q220_pdp-image-2.jpg",
          img3: "https://cdn.svyaznoy.ru/upload/iblock/f38/ruun_iphone-se_white_q220_pdp-image-4.jpg",
          description: "Apple iPhone SE 2020 64GB с новой комплектацией (белый)",
          fullDescription: "iPhone SE — это самый мощный компактный iPhone1 с множеством передовых технологий. A13 Bionic — самый быстрый процессор для iPhone, обеспечивающий максимальную производительность для приложений, игр и фотосъёмки. Портретный режим и шесть эффектов освещения для фотографий студийного качества.",
          price: 39990,
          phone: true

      },
      {
          id: 4,
          title: "iPhone XR",
          img: "https://cdn.svyaznoy.ru/upload/iblock/5c8/coral.jpg",
          img1: "https://cdn.svyaznoy.ru/upload/iblock/890/13.jpg",
          img2: "https://cdn.svyaznoy.ru/upload/iblock/152/iphonexr-coral-pureangles_gb-en-print.jpg",
          img3: "https://cdn.svyaznoy.ru/upload/iblock/7dfc6d277a390feac25d2c7493cb0d97/1.jpg",
          description: "Apple iPhone XR 64GB с новой комплектацией (коралловый)",
          fullDescription: "Новый дисплей Liquid Retina - самый продвинутый ЖК‑дисплей Apple. Еще более быстрый Face ID. Самый мощный и умный процессор iPhone. И потрясающая камера. iPhone XR - воплощение красоты и интеллекта.",
          price: 44090,
          phone: true
      }
  ],
  usersMac: [
      {
          id: 5,
          title: "iMac",
          img: "https://cdn.svyaznoy.ru/upload/iblock/bec/ruru_imac_24-2ports_pink_q321_pdp_image-1.jpg",
          img1: "https://cdn.svyaznoy.ru/upload/iblock/91f/ruru_imac_24-2ports_pink_q321_pdp_image-2.jpg",
          img2: "https://cdn.svyaznoy.ru/upload/iblock/e18/ruru_imac_24-2ports_pink_q321_pdp_image-3.jpg",
          img3: "https://cdn.svyaznoy.ru/upload/iblock/0c2/ruru_imac_24-2ports_pink_q321_pdp_image-4.jpg",
          description: "Apple iMac 24 Retina 4,5K, M1 (7-core GPU), 8 ГБ, 256 ГБ (розовый)",
          fullDescription: "Такого компьютера вы ещё не видели. Его впечатляющий дизайн стал возможным благодаря чипу Apple M1. Дисплей Retina 4,5K с диагональю 24 дюйма и поддержкой более миллиарда цветов обеспечивает реалистичное и потрясающе детальное изображение.",
          price: 129990,
          mac: true
      },
      {
          id: 6,
          title: "MacBook Air",
          img: "https://cdn.svyaznoy.ru/upload/iblock/5b2/ruru_macbook-air_gold_q220_pdp-image-1.jpg",
          img1: "https://cdn.svyaznoy.ru/upload/iblock/4c6/ruru_macbook-air_gold_q220_pdp-image-2.jpg",
          img2: "https://cdn.svyaznoy.ru/upload/iblock/27d/ruru_macbook-air_gold_q220_pdp-image-3.jpg",
          img3: "https://cdn.svyaznoy.ru/upload/iblock/609/ruru_macbook-air_gold_q220_pdp-image-4.jpg",
          description: "Apple MacBook Air 13.3 i5 1,1 ГГц, 8Гб, 512Гб SSD, Iris Plus (золотой)",
          fullDescription: "Обновленный MacBook Air доступен в трех цветах: серебристый, серый космос и золотой. У него великолепный дисплей Retina с технологией True Tone, Touch ID, клавиатура Magic Keyboard с подсветкой и трекпад Force Touch. Все это в тонком и легком корпусе из полностью переработанного алюминия и с культовым дизайном. А благодаря аккумулятору на 11 часов работы этот универсальный ноутбук готов помогать вам весь день. ",
          price: 105990,
          mac: true
      },
      {
          id: 7,
          title: "MacBook Pro",
          img: "https://cdn.svyaznoy.ru/upload/iblock/264/macbook-pro-13_4ports_silver_pdp_1.jpg",
          img1: "https://cdn.svyaznoy.ru/upload/iblock/265/macbook-pro-13_4ports_silver_pdp_2.jpg",
          img2: "https://cdn.svyaznoy.ru/upload/iblock/ef6/macbook-pro-13_4ports_silver_pdp_3.jpg",
          img3: "https://cdn.svyaznoy.ru/upload/iblock/77f/macbook-pro-13_4ports_silver_pdp_5.jpg",
          description: "Apple MacBook Pro 13 Core i5 2,4 ГГц, 8 ГБ, 512 ГБ SSD, Iris Plus 655, Touch Bar (серебристый)",
          fullDescription: "Четырёхъядерный процессор Intel 8-го поколения с ускорением Turbo Boost до 4,1 ГГц. Великолепный яркий дисплей Retina с технологией True Tone, изображение на котором выглядит ещё реалистичнее. Клавиатура, разработанная Apple. И удобная панель Touch Bar для более продуктивной работы. Это самый мощный и продвинутый 13‑дюймовый ноутбук Apple.",
          price: 139990,
          mac: true
      },
      {
          id: 8,
          title: "iMac Pro",
          img: "https://cdn.svyaznoy.ru/upload/iblock/bd7/ruru_imac-pro_q320_pdp-image-1.jpg",
          img1: "https://cdn.svyaznoy.ru/upload/iblock/661/ruru_imac-pro_q320_pdp-image-2.jpg",
          img2: "https://cdn.svyaznoy.ru/upload/iblock/4ab/ruru_imac-pro_q320_pdp-image-3.jpg",
          img3: "https://cdn.svyaznoy.ru/upload/iblock/94b/ruru_imac-pro_q320_pdp-image-4.jpg",
          description: "Apple iMac Pro 27 с дисплеем Retina 5K, Intel Xeon W 3.2 ГГц, 32 ГБ, 1 ТБ SSD, Radeon Pro Vega 56",
          fullDescription: "Чем бы вы ни занимались — монтажом видео, 3D‑анимацией, музыкой или разработкой ПО, — вы сможете воплотить в жизнь самые грандиозные идеи. iMac Pro работает на базе процессора Intel Xeon W, который поддерживает до 18 ядер и обеспечивает потрясающую производительность. Графический процессор AMD Radeon Pro Vega позволяет выполнять моделирование и рендеринг невероятно реалистичных спецэффектов и виртуальных миров. А благодаря памяти до 256 ГБ и флеш-накопителю до 4 ТБ сохранение и загрузка проектов происходят практически мгновенно.* iMac Pro. Самый мощный iMac.",
          price: 369990,
          mac: true
      }
  ],
  usersPad: [
      {
          id: 9,
          title: "iPad Pro",
          img: "https://cdn.svyaznoy.ru/upload/iblock/d06/ruru_ipad-pro_gps_space_gray_aluminum_12.9in_pdp-image-1a.jpg",
          img1: "https://cdn.svyaznoy.ru/upload/iblock/a1e/ruru_ipad-pro_gps_space_gray_aluminum_12.9in_pdp-image-2.jpg",
          img2: "https://cdn.svyaznoy.ru/upload/iblock/774/ruru_ipad-pro_gps_space_gray_aluminum_12.9in_pdp-image-3.jpg",
          img3: "https://cdn.svyaznoy.ru/upload/iblock/dfa/ruru_ipad-pro_gps_space_gray_aluminum_12.9in_pdp-image-4.jpg",
          description: "Apple iPad Pro 12.9 Wi-Fi 128GB (2020) (серый космос)",
          fullDescription: "iPad Pro 12,9 дюйма оснащен потрясающим дисплеем Liquid Retina от края до края.1 Его новые камеры уровня Pro — широкоугольная и сверхширокоугольная — и сканер LiDAR открывают невероятные возможности для передовых приложений с дополненной реальностью. Мощный процессор A12Z Bionic обеспечивает работу всех необходимых приложений и игр со сложной графикой. Поддерживаются Apple Pencil2 и новая клавиатура Magic Keyboard с трекпадом.2 Доступна быстрая связь по Wi‑Fi. Можно работать весь день без подзарядки.4 А наличие миллионов приложений в App Store позволяет использовать iPad Pro для самых разных задач, где бы вы ни были.",
          price: 80990,
          pad: true
      },
      {
          id: 10,
          title: "iPad Air",
          img: "https://cdn.svyaznoy.ru/upload/iblock/897/ruru_ipad-air_q420_green-wi-fi_pdp-image-1b.jpg",
          img1: "https://cdn.svyaznoy.ru/upload/iblock/388/ruru_ipad-air_q420_green-wi-fi_pdp-image-2.jpg",
          img2: "https://cdn.svyaznoy.ru/upload/iblock/157/ruru_ipad-air_q420_green-wi-fi_pdp-image-3.jpg",
          img3: "https://cdn.svyaznoy.ru/upload/iblock/916/ruru_ipad-air_q420_green-wi-fi_pdp-image-6.jpg",
          description: "Apple iPad Air 64Gb Wi-Fi 2020 (зеленый)",
          fullDescription: "Дисплей Liquid Retina 10,9 дюйма занимает всю переднюю панель. А с Touch ID вы сможете быстро, легко и безопасно разблокировать iPad Air и делать покупки.",
          price: 53190,
          pad: true
      },
      {
          id: 11,
          title: "iPad 10.2",
          img: "https://cdn.svyaznoy.ru/upload/iblock/360/91fa360fb86cd442ffa1a4b89ef5ad89.jpg",
          img1: "https://cdn.svyaznoy.ru/upload/iblock/fbf/ruru_ipad_gold_wi-fi_pdp-image_2.jpg",
          img2: "https://cdn.svyaznoy.ru/upload/iblock/56c/ruru_ipad_gold_wi-fi_pdp-image_3.jpg",
          img3: "https://cdn.svyaznoy.ru/upload/iblock/faf/ruru_ipad_gold_wi-fi_pdp-image_9.jpg",
          description: "Apple iPad 10.2 Wi-Fi 32Gb 2020 (золотой)",
          fullDescription: "Новый iPad. Он станет вашим блокнотом для записей, мобильным офисом, фотостудией, игровой приставкой и даже личным кинотеатром. Мощности процессора A12 Bionic достаточно и для важных приложений, и для увлекательных игр. Редактируйте тексты, ищите в интернете и одновременно общайтесь с коллегами по FaceTime. С Apple Pencil делать заметки на iPad просто как никогда.1 Добавьте полноразмерную клавиатуру Smart Keyboard для удобного набора текста.",
          price: 29990,
          pad: true
      },
      {
          id: 12,
          title: "iPad mini",
          img: "https://cdn.svyaznoy.ru/upload/iblock/ced/ipadmini_gold_2up_ru-ru-screen1.jpg",
          img1: "https://cdn.svyaznoy.ru/upload/iblock/722/ipadmini-gold-360_ru-ru-screen1.jpg",
          img2: "https://cdn.svyaznoy.ru/upload/iblock/629/ipadmini-gold-360_ru-ru-screen3.jpg",
          img3: "https://cdn.svyaznoy.ru/upload/iblock/17d/ipadmini-gold-360_ru-ru-screen2.jpg",
          description: "Apple iPad mini 64Gb Wi-Fi 2019 (золотой)",
          fullDescription: "iPad mini идеально сочетает в себе компактность и производительность - за это его и любят. Теперь для любви появилось еще больше поводов. Процессор A12 Bionic с системой Neural Engine. Дисплей Retina 7,9 дюйма с технологией True Tone. И поддержка Apple Pencil, чтобы вам было ещё проще следовать за вдохновением. Это все тот же iPad mini, но теперь он умеет больше.",
          price: 37990,
          pad: true
      }
  ],
  usersAccses: [
      {
          id: 13,
          title: "Адаптер питания",
          img: "https://cdn.svyaznoy.ru/upload/iblock/864/4219710.jpg",
          img1: "https://cdn.svyaznoy.ru/upload/iblock/b9a/4219710-2.jpg",
          img2: "https://cdn.svyaznoy.ru/upload/iblock/2db/4219710-5.jpg",
          img3: "https://cdn.svyaznoy.ru/upload/iblock/864/4219710.jpg",
          description: "Адаптер питания Apple USB-C 18 Вт (белый)",
          fullDescription: "Адаптер питания Apple USB-C мощностью 18 Вт дает возможность быстро и эффективно заряжать устройство дома, в офисе или в пути. Этот адаптер совместим с любыми устройствами, оснащенными портом USB-C, но для максимальной эффективности Apple рекомендует использовать его для зарядки iPad Pro 11 дюймов и iPad Pro 12,9 дюйма (3-го поколения). Также его можно использовать для быстрой зарядки iPhone 8 или новее. Кабель USB-C/Lightning продается отдельно.",
          price: 2939,
          accses: true
      },
      {
          id: 14,
          title: "AirPods Pro",
          img: "https://cdn.svyaznoy.ru/upload/iblock/4951d12052c4c8829ac746c59d1032b1/11.jpg",
          img1: "https://cdn.svyaznoy.ru/upload/iblock/627/12.jpg",
          img2: "https://cdn.svyaznoy.ru/upload/iblock/9b1/13.jpg",
          img3: "https://cdn.svyaznoy.ru/upload/iblock/668/14.jpg",
          description: "Наушники Apple AirPods Pro (белый)",
          fullDescription: "Это наушники совершенно нового класса. AirPods Pro исключительно комфортны, в них реализована технология активного шумоподавления, и можно даже выбрать вкладыши своего размера. Вы будете лучше чувствовать музыку, а не наушники.",
          price: 19499,
          accses: true
      },
      {
          id: 15,
          title: "Apple Watch Series 3",
          img: "https://cdn.svyaznoy.ru/upload/iblock/280/ruru_apple-watch-series3-gps-aluminum-white_sport_band_38mm_pdp-image-1.jpg",
          img1: "https://cdn.svyaznoy.ru/upload/iblock/5fa/ruru_apple-watch-series3-gps-aluminum-white_sport_band_38mm_pdp-image-2.jpg",
          img2: "https://cdn.svyaznoy.ru/upload/iblock/7df/ruru_apple-watch-series3-gps-aluminum-white_sport_band_38mm_pdp-image-4.jpg",
          img3: "https://cdn.svyaznoy.ru/upload/iblock/51a/ruru_apple-watch-series3-gps-aluminum-white_sport_band_38mm_pdp-image-6.jpg",
          description: "Apple Watch Series 3, 38 мм, корпус из серебристого алюминия, спортивный ремешок белого цвета",
          fullDescription: "Умные подсказки про физическую активность. Усовершенствованное приложение Пульс. Любимые плейлисты прямо на запястье. Встроенный высотомер. И более мощный процессор, благодаря которому Siri на часах может говорить. Представляем Apple Watch Series 3. У них как никогда много полезных функций, которые мотивируют на новые достижения, помогают быть активнее и позволяют оставаться на связи.",
          price: 16990,
          accses: true
      },
      {
          id: 16,
          title: "Clear Case with MagSafe",
          img: "https://cdn.svyaznoy.ru/upload/iblock/6f8/mhln3.jpg",
          img1: "https://cdn.svyaznoy.ru/upload/iblock/957/ruru_iphone12pro_clear_case_q121_pdp_image-4.jpg",
          img2: "https://images.biggeek.ru/1/435/13ef/12470-32512470-331MHLM3_AV2.jpeg",
          img3: "https://images-na.ssl-images-amazon.com/images/I/71eqUMWyY0L._AC_SL1500_.jpg",
          description: "Клип-кейс Apple Clear Case with MagSafe для iPhone 12 Pro Max (прозрачный)",
          fullDescription: "Встроенные магниты точно совпадают с магнитами на задней поверхности iPhone 12 Pro Max – они надежно удерживают чехол и в то же время позволяют легко его снимать. Магниты идеально совмещают устройства, поэтому беспроводная зарядка выполняется еще удобнее и быстрее. При этом снимать чехол на время беспроводной зарядки не нужно – достаточно просто присоединить зарядное устройство MagSafe или положить iPhone на зарядное устройство стандарта Qi.",
          price: 4999,
          accses: true
      }
  ]},

  getters: {
    allPhone(state){
      return state.usersPhone.filter(phone => phone.phone)
    },
    allMac(state){
      return state.usersMac.filter(mac => mac.mac)
    },
    allPad(state){
      return state.usersPad.filter(pad => pad.pad)
    },
    allAccses(state){
      return state.usersAccses.filter(accses => accses.accses)
    },
    // finishedBookCount(state,getters){
    //   return getters.finishedBooks.length;
    // },
    phoneById: state => (id) => { // вместо id можно передать любые данные 
      return state.usersPhone.filter(phone => phone.id == id)[0];
    },
    macById: state => (id) => { 
      return state.usersMac.filter(mac => mac.id == id)[0];
    },
    padById: state => (id) => { 
      return state.usersPad.filter(pad => pad.id == id)[0];
    },
    accsesById: state => (id) => { 
      return state.usersAccses.filter(accses => accses.id == id)[0];
    }
  },
  mutations: {
    // shareBook(state, book){
    //   state.shared.push(book);
    // },
    // markRead(state, index){
    //   state.usersBook[index].finished = true;
    // }
    order(state,phone, mac, pad, accses){
      state.order.push(phone, mac,pad, accses);
    }
  },
  actions: {
  },
  modules: {
  }
})
