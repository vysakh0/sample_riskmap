export default {
  debug: false,
  testing: false,

  //deployment specific env params
  riskmap_us: {
    title: 'RiskMap.us',
    report_timeperiod: 3600,
    supported_languages: [
      {key: 'en', name: 'English'},
      {key: 'es', name: 'Espaniol'}
    ],
    default_language: 'en',
    tile_layer: 'https://api.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoidXJiYW5yaXNrbWFwIiwiYSI6ImNqMnFraWVzYzAyd24ycXRqMmpvbmhyZ2QifQ.xc_v7umok760t2q6NZK1RA',
    data_server: 'https://data.riskmap.us/',
    app: 'https://broward.riskmap.us/',
    deep_links: [
      {name: 'facebook', link: 'http://m.me/riskmapUS'},
      //TODO after the twitter dev bot is registered
      {name: 'twitter', link: 'https://twitter.com/messages/compose?recipient_id=905602080252977152&welcome_message_id=905919155492331523&text=/flood'}/*,
      //Disable telegram button for US deployment
      {name: 'telegram', link: 'https://telegram.me/riskmapus_bot'}*/
    ]
  },
  riskmap_my: {
    title: 'RiskMap.my',
    report_timeperiod: 129600,
    supported_languages: [
      {key: 'en', name: 'English'},
      {key: 'tm', name: 'Tamil'}
    ],
    default_language: 'en',
    tile_layer: 'https://api.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoidXJiYW5yaXNrbWFwIiwiYSI6ImNqMnFraWVzYzAyd24ycXRqMmpvbmhyZ2QifQ.xc_v7umok760t2q6NZK1RA',
    data_server: 'https://data-dev.riskmap.in/',
    app: 'https://dev.riskmap.in/',
    deep_links: [
      {name: 'facebook', link: 'http://m.me/CognicityDevIndia'},
      {name: 'twitter', link: 'https://twitter.com/intent/tweet?text=Report+flood&via=CognicityDev_IN'},
      {name: 'telegram', link: 'https://telegram.me/CognicityIN_bot'}
    ]
  },
  petabencana: {
    title: 'Petabencana.id',
    report_timeperiod: 3600,
    supported_languages: [
      {key: 'en', name: 'English'},
      {key: 'id', name: 'Bahasa'}
    ],
    default_language: 'id',
    tile_layer: 'https://api.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoidXJiYW5yaXNrbWFwIiwiYSI6ImNpdmVhbTFraDAwNHIyeWw1ZDB6Y2hhbTYifQ.tpgt1PB5lkJ-wITS02c96Q',
    data_server: 'https://data.petabencana.id/',
    app: 'https://petabencana.id/',
    deep_links: [
      {name: 'facebook', link: 'https://www.facebook.com/petabencana.id/'},
      {name: 'twitter', link: 'https://twitter.com/intent/tweet?text=Report+flood&via=petabencana'},
      {name: 'telegram', link: 'https://telegram.me/BencanaBot'}
    ]
  },
  riskmap_in: {
    title: 'RiskMap.in',
    report_timeperiod: 43200, //12 hrs
    supported_languages: [
      {key: 'en', name: 'English'},
      {key: 'tm', name: 'Tamil'}
    ],
    default_language: 'en',
    tile_layer: 'https://api.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoidXJiYW5yaXNrbWFwIiwiYSI6ImNqMnFraWVzYzAyd24ycXRqMmpvbmhyZ2QifQ.xc_v7umok760t2q6NZK1RA',
    data_server: 'https://data.riskmap.in/',
    app: 'https://riskmap.in/',
    deep_links: [
      {name: 'facebook', link: 'http://m.me/riskmapbot'},
      {name: 'twitter', link: 'https://twitter.com/intent/tweet?text=Report+flood&via=riskmapindia'},
      {name: 'telegram', link: 'https://telegram.me/riskmapbot'}
    ]
  }
};
