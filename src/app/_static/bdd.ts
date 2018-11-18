export const EVENTS = [
  {
    'id' : '1',
    'name': 'Ma première liste',
    'nameEvent': 'Noël',
    'asAGift': false,
    'date': '25/12/2018'
  },
  {
    'id' : '2',
    'name': 'Anniversaire Simon',
    'nameEvent': 'Anniversaire',
    'asAGift': true,
    'date': '25/03/2018'
  }
];

export const GIFTS = [
  {
    'id' : '1',
    'name': 'Pastèque',
    'quantity': 1,
    'linksGifts': [
      'https://www.willemsefrance.fr/PBSCProduct.asp?ItmID=24625956&AccID=126284&gclid=CjwKCAiA8rnfBRB3EiwAhrhBGvrUNzCTSdbBocPVMlp10E%2Dl%2DVMztSqHATp7ZHim9xPwU97c14K5GBoCzNMQAvD%5FBwE&st_izi=21&ct_izi=MTk4&c_izi=d2lsbGVtc2VmcmFuY2U%3D&s_izi=Z29vZ2xlc2hvcHBpbmc%3D',
      'https://www.willemsefrance.fr/PBSCProduct.asp?ItmID=24625956&AccID=126284&gclid=CjwKCAiA8rnfBRB3EiwAhrhBGvrUNzCTSdbBocPVMlp10E%2Dl%2DVMztSqHATp7ZHim9xPwU97c14K5GBoCzNMQAvD%5FBwE&st_izi=21&ct_izi=MTk4&c_izi=d2lsbGVtc2VmcmFuY2U%3D&s_izi=Z29vZ2xlc2hvcHBpbmc%3D'
    ],
    'listPeople': [
      {
        'mail': 'horatiu.cirstea@plop.com',
        'send': false
      },
      {
        'mail': 'emmanuel.jeandel@plop.com',
        'send': false
      }
    ],
    'giftingEventId' : 1
  },
  {
    'id' : '2',
    'name': 'Orange',
    'quantity': 2,
    'linksGifts': [
      'https://www.mon-marche.fr/fruits/les-agrumes/les-oranges-a-jus/m_33_f_2286_p_194.php?gclid=CjwKCAiA8rnfBRB3EiwAhrhBGoa0djZ_m1ONUsDHttBT0O13Amyc0jQVWhnw71HkG7u0sGEnphRQ0xoCs3AQAvD_BwE'
    ],
    'listPeople': [
      {
        'mail': 'horatiu.cirstea@plop.com',
        'send': false
      },
      {
        'mail': 'emmanuel.jeandel@plop.com',
        'send': false
      },
    ],
    'giftingEventId' : 2
  }
];

// TODO : REMOVE ME BEFORE FINISHING THE PROJECT, I'M JUST HERE FOR TESTS


