(() => {
  const products = [
    {id:'phone-pro',title:'Смартфон Pro X',category:'Смартфоны',price:49990,isAvailable:true,description:'Яркий экран, быстрая камера и аккумулятор на весь день.',emoji:'📱'},
    {id:'phone-lite',title:'Смартфон Lite 12',category:'Смартфоны',price:32990,isAvailable:true,description:'Лёгкий смартфон для связи, фото и повседневных дел.',emoji:'📱'},
    {id:'phone-max',title:'Смартфон Max 15',category:'Смартфоны',price:68990,isAvailable:false,description:'Большой экран и мощный процессор для работы и отдыха.',emoji:'📱'},
    {id:'laptop-air',title:'Ноутбук Air 15',category:'Ноутбуки',price:79990,isAvailable:true,description:'Тонкий ноутбук для учёбы, работы и путешествий.',emoji:'💻'},
    {id:'laptop-studio',title:'Ноутбук Studio 14',category:'Ноутбуки',price:119990,isAvailable:true,description:'Производительность для творчества и многозадачности.',emoji:'💻'},
    {id:'laptop-go',title:'Ноутбук Go 13',category:'Ноутбуки',price:59990,isAvailable:true,description:'Компактная модель с хорошим временем автономной работы.',emoji:'💻'},
    {id:'sound-pro',title:'Наушники Sound Pro',category:'Наушники',price:12990,isAvailable:true,description:'Чистый звук, активное шумоподавление и удобная посадка.',emoji:'🎧'},
    {id:'sound-mini',title:'Наушники Sound Mini',category:'Наушники',price:7990,isAvailable:true,description:'Компактная беспроводная гарнитура на каждый день.',emoji:'🎧'},
    {id:'sound-max',title:'Наушники Sound Max',category:'Наушники',price:18990,isAvailable:false,description:'Объёмное звучание и мягкие амбушюры для долгого прослушивания.',emoji:'🎧'}
  ];
  const features = {
  "phone-pro": [
    {
      "label": "Экран",
      "value": "6,4 дюйма OLED"
    },
    {
      "label": "Память",
      "value": "256 ГБ"
    },
    {
      "label": "Гарантия",
      "value": "1 год"
    }
  ],
  "phone-lite": [
    {
      "label": "Экран",
      "value": "6,1 дюйма AMOLED"
    },
    {
      "label": "Память",
      "value": "128 ГБ"
    },
    {
      "label": "Гарантия",
      "value": "1 год"
    }
  ],
  "phone-max": [
    {
      "label": "Экран",
      "value": "6,8 дюйма OLED"
    },
    {
      "label": "Память",
      "value": "512 ГБ"
    },
    {
      "label": "Гарантия",
      "value": "1 год"
    }
  ],
  "laptop-air": [
    {
      "label": "Экран",
      "value": "15,3 дюйма IPS"
    },
    {
      "label": "Память",
      "value": "16 / 512 ГБ"
    },
    {
      "label": "Гарантия",
      "value": "1 год"
    }
  ],
  "laptop-studio": [
    {
      "label": "Экран",
      "value": "14 дюймов IPS"
    },
    {
      "label": "Память",
      "value": "32 / 1 ТБ"
    },
    {
      "label": "Гарантия",
      "value": "2 года"
    }
  ],
  "laptop-go": [
    {
      "label": "Экран",
      "value": "13,3 дюйма IPS"
    },
    {
      "label": "Память",
      "value": "16 / 512 ГБ"
    },
    {
      "label": "Гарантия",
      "value": "1 год"
    }
  ],
  "sound-pro": [
    {
      "label": "Подключение",
      "value": "Bluetooth 5.3"
    },
    {
      "label": "Работа",
      "value": "До 35 часов"
    },
    {
      "label": "Гарантия",
      "value": "1 год"
    }
  ],
  "sound-mini": [
    {
      "label": "Подключение",
      "value": "Bluetooth 5.2"
    },
    {
      "label": "Работа",
      "value": "До 24 часов"
    },
    {
      "label": "Гарантия",
      "value": "1 год"
    }
  ],
  "sound-max": [
    {
      "label": "Подключение",
      "value": "Bluetooth 5.3"
    },
    {
      "label": "Работа",
      "value": "До 40 часов"
    },
    {
      "label": "Гарантия",
      "value": "2 года"
    }
  ]
};
  const readCart=()=>{try{return JSON.parse(localStorage.getItem('techstore-cart')||'{}')}catch{return {}}};
  const saveCart=(cart)=>{localStorage.setItem('techstore-cart',JSON.stringify(cart));window.dispatchEvent(new CustomEvent('cart:changed',{detail:cart}));};
  const addToCart=(id)=>{const p=products.find(x=>x.id===id);if(!p||!p.isAvailable)return;const c=readCart();c[id]=(c[id]||0)+1;saveCart(c);};
  const changeQuantity=(id,delta)=>{const c=readCart();c[id]=Math.max(0,(c[id]||0)+delta);if(!c[id])delete c[id];saveCart(c);};
  window.Store={products,features,readCart,saveCart,addToCart,changeQuantity,money:(n)=>new Intl.NumberFormat('ru-RU').format(n)+' ₽'};
})();
