// pages/home/home.js
import {Theme} from "../../model/theme";
import {Banner} from "../../model/banner";
import {Category} from "../../model/category";
import {Coupontheme} from "../../model/coupontheme";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    topTheme:{
        "id": 1,
        "title": "清凉一夏，折扣季",
        "description": "秋天是金色的。麦穗是金色的，秋阳是金色的。虽然冬快至，但宜人的温度总是让我们心情愉快#我们为您精选了一系列秋冬折扣商品，慢慢挑选吧~",
        "name": "t-1",
        "entrance_img": "http://i2.sleeve.7yue.pro/m2.png",
        "extend": null,
        "internal_top_img": "http://i2.sleeve.7yue.pro/m33.png",
        "title_img": "",
        "tpl_name": "janna",
        "online": true
    },
    topBanner:{
      "id": 1,
      "name": "b-1",
      "description": "首页顶部主banner",
      "img": null,
      "title": null,
      "items": [
        {
          "id": 12,
          "img": "http://i2.sleeve.7yue.pro/m1.png",
          "keyword": "t-2",
          "type": 3,
          "name": null,
          "banner_id": 1
        },
        {
          "id": 13,
          "img": "http://i1.sleeve.7yue.pro/assets/702f2ce9-5729-4aa4-aeb3-921513327747.png",
          "keyword": "23",
          "type": 1,
          "name": null,
          "banner_id": 1
        },
        {
          "id": 14,
          "img": "http://i1.sleeve.7yue.pro/assets/b8e510a1-8340-43c2-a4b0-0e56a40256f9.png",
          "keyword": "24",
          "type": 1,
          "name": null,
          "banner_id": 1
        }
      ]
    },
    category:[
      {
        "id": 1,
        "title": "服装",
        "img": "http://i1.sleeve.7yue.pro/grid/clothing.png",
        "name": null,
        "category_id": null,
        "root_category_id": 2
      },
      {
        "id": 2,
        "title": "包包",
        "img": "http://i1.sleeve.7yue.pro/grid/bag.png",
        "name": null,
        "category_id": null,
        "root_category_id": 3
      },
      {
        "id": 3,
        "title": "鞋",
        "img": "http://i1.sleeve.7yue.pro/grid/shoes.png",
        "name": null,
        "category_id": null,
        "root_category_id": 1
      },
      {
        "id": 4,
        "title": "饰品",
        "img": "http://i1.sleeve.7yue.pro/grid/jewelry.png",
        "name": null,
        "category_id": null,
        "root_category_id": 5
      },
      {
        "id": 5,
        "title": "居家",
        "img": "http://i1.sleeve.7yue.pro/grid/furniture.png",
        "name": null,
        "category_id": null,
        "root_category_id": 4
      },
      {
        "id": 6,
        "title": "工艺",
        "img": "http://i1.sleeve.7yue.pro/grid/book.png",
        "name": null,
        "category_id": null,
        "root_category_id": 24
      }
    ],
    coupontheme:{
      "id": 2,
      "title": "夏日好礼送不停",
      "entrance_img": "http://i2.sleeve.7yue.pro/m14.png",
      "online": true,
      "remark": "限服装、鞋、文具等商品",
      "start_time": null,
      "end_time": null
    },
    themeC:{
      "id": 4,
      "title": "每周上新",
      "description": "风袖`每周上新`活动#每周都有一款折扣商品，每周都有适合你的唯一专属#有Ins复古风装饰；金属CD唱片夹；每周来逛逛，找到你所喜爱的东西",
      "name": "t-2",
      "entrance_img": null,
      "extend": null,
      "internal_top_img": "http://i2.sleeve.7yue.pro/m1.png",
      "title_img": "http://i2.sleeve.7yue.pro/m3.png",
      "tpl_name": null,
      "online": true
    },
    spuDataAll:[
      {
        "id": 23,
        "title": "双色牛仔裤",
        "subtitle": "秋冬新款，做一个Cool Boy",
        "img": "http://i2.sleeve.7yue.pro/n11.png",
        "for_theme_img": "http://i1.sleeve.7yue.pro/assets/702f2ce9-5729-4aa4-aeb3-921513327747.png",
        "price": "1399",
        "discount_price": null,
        "description": null,
        "tags": "",
        "sketch_spec_id": "1",
        "max_purchase_quantity": null,
        "min_purchase_quantity": null
      },
      {
        "id": 10,
        "title": "碳素墨水",
        "subtitle": "虽然我们早已不再使用钢笔书写，但钢笔在纸上划过的笔触永远是键盘无法替代的。一只钢笔+一瓶墨水在一个安静的午后，写写内心的故事。",
        "img": "http://i2.sleeve.7yue.pro/m24.png",
        "for_theme_img": "",
        "price": "80.00",
        "discount_price": "69.00",
        "description": null,
        "tags": "",
        "sketch_spec_id": null,
        "max_purchase_quantity": null,
        "min_purchase_quantity": null
      },
      {
        "id": 3,
        "title": "抹茶小橡皮",
        "subtitle": "小作文写错了，用它擦一擦",
        "img": "http://i2.sleeve.7yue.pro/m17.png",
        "for_theme_img": "https://gitee.com/lrelia7/sleeve-static/raw/master/theme/spu2.png",
        "price": "29.99",
        "discount_price": "17.00",
        "description": null,
        "tags": "一飞推荐",
        "sketch_spec_id": "1",
        "max_purchase_quantity": null,
        "min_purchase_quantity": null
      },
      {
        "id": 15,
        "title": "多彩别针、回形针",
        "subtitle": "每盒70个，可爱多彩",
        "img": "http://i2.sleeve.7yue.pro/m26.png",
        "for_theme_img": null,
        "price": "24",
        "discount_price": "19.9",
        "description": null,
        "tags": "三色可选",
        "sketch_spec_id": "1",
        "max_purchase_quantity": null,
        "min_purchase_quantity": null
      },
      {
        "id": 14,
        "title": "Ins 复古小夹子（Mini)",
        "subtitle": "静静的，享受时光的流逝",
        "img": "http://i2.sleeve.7yue.pro/m23.png",
        "for_theme_img": null,
        "price": "19.9",
        "discount_price": null,
        "description": null,
        "tags": "三色可选",
        "sketch_spec_id": null,
        "max_purchase_quantity": null,
        "min_purchase_quantity": null
      },
      {
        "id": 8,
        "title": "Ins复古碎花NoteBook",
        "subtitle": "林白默默的掏出小本本，将她说的话一次不漏的记了下来。",
        "img": "http://i2.sleeve.7yue.pro/m19.png",
        "for_theme_img": "http://i1.sleeve.7yue.pro/assets/b6442702-4810-46cb-bb0b-f4602d38e4ff.png",
        "price": "29.99",
        "discount_price": "27.8",
        "description": null,
        "tags": "林白推荐",
        "sketch_spec_id": "1",
        "max_purchase_quantity": null,
        "min_purchase_quantity": null
      },
      {
        "id": 28,
        "title": "Ins复古金色落地灯",
        "subtitle": "Instagram复古台灯，就在此刻回到过去，找寻逝去的记忆",
        "img": "http://i2.sleeve.7yue.pro/a9.png",
        "for_theme_img": "",
        "price": "999",
        "discount_price": null,
        "description": null,
        "tags": "Ins$复古流行",
        "sketch_spec_id": "8",
        "max_purchase_quantity": null,
        "min_purchase_quantity": null
      },
      {
        "id": 26,
        "title": "SemiConer柔质沙发",
        "subtitle": "窝在沙发上，一杯红酒配电影",
        "img": "http://i2.sleeve.7yue.pro/3.png",
        "for_theme_img": "",
        "price": "4799",
        "discount_price": "4200",
        "description": null,
        "tags": "",
        "sketch_spec_id": "1",
        "max_purchase_quantity": null,
        "min_purchase_quantity": null
      },
      {
        "id": 25,
        "title": "复古双色沙发",
        "subtitle": "双色可选，经典青黄两色",
        "img": "http://i2.sleeve.7yue.pro/h3.png",
        "for_theme_img": "",
        "price": "3999",
        "discount_price": null,
        "description": null,
        "tags": "复刻经典$双色可选",
        "sketch_spec_id": "1",
        "max_purchase_quantity": null,
        "min_purchase_quantity": null
      },
      {
        "id": 24,
        "title": "秋冬新款驼色大衣",
        "subtitle": "2020新款，暖暖过秋冬",
        "img": "http://i2.sleeve.7yue.pro/n3.png",
        "for_theme_img": "http://i1.sleeve.7yue.pro/assets/b8e510a1-8340-43c2-a4b0-0e56a40256f9.png",
        "price": "2999",
        "discount_price": "2699",
        "description": null,
        "tags": "经典单色",
        "sketch_spec_id": "1",
        "max_purchase_quantity": null,
        "min_purchase_quantity": null
      },
      {
        "id": 27,
        "title": "Mier双色靠椅",
        "subtitle": "安静的午后，一杯清茶，追忆似水年华。看清风浮动，看落日余晖",
        "img": "http://i2.sleeve.7yue.pro/h1.png",
        "for_theme_img": "http://i1.sleeve.7yue.pro/assets/f6c9fce8-626f-44c0-a709-3f6ef9f3fbef.png",
        "price": "1299",
        "discount_price": null,
        "description": null,
        "tags": "",
        "sketch_spec_id": "1",
        "max_purchase_quantity": null,
        "min_purchase_quantity": null
      },
      {
        "id": 12,
        "title": "林间有风测试商品",
        "subtitle": "测试商品，可购买体验完整支付和订单流程",
        "img": "http://i2.sleeve.7yue.pro/x1.png",
        "for_theme_img": "",
        "price": "0.2",
        "discount_price": null,
        "description": null,
        "tags": "测试数据$可支付",
        "sketch_spec_id": null,
        "max_purchase_quantity": null,
        "min_purchase_quantity": null
      },
      {
        "id": 11,
        "title": "飞行员墨镜",
        "subtitle": "戴起来像小李子",
        "img": "http://i2.sleeve.7yue.pro/n2.png",
        "for_theme_img": "",
        "price": "77.00",
        "discount_price": null,
        "description": null,
        "tags": null,
        "sketch_spec_id": null,
        "max_purchase_quantity": null,
        "min_purchase_quantity": null
      },
      {
        "id": 6,
        "title": "Sleeve风袖说牛仔系列",
        "subtitle": "Sleeve风袖说当季经典款",
        "img": "http://i2.sleeve.7yue.pro/n14.png",
        "for_theme_img": "",
        "price": "1799",
        "discount_price": "",
        "description": null,
        "tags": "包邮$热门",
        "sketch_spec_id": "1",
        "max_purchase_quantity": null,
        "min_purchase_quantity": null
      },
      {
        "id": 2,
        "title": "林间有风自营针织衫",
        "subtitle": "秋日冬款，浪漫满屋",
        "img": "http://i1.sleeve.7yue.pro/assets/ecf8d824-19d4-4db2-a5da-872ab014fecd.png",
        "for_theme_img": "https://gitee.com/lrelia7/sleeve-static/raw/master/theme/spu1.png",
        "price": "77.00",
        "discount_price": "62.00",
        "description": null,
        "tags": "秋日冬款$浪漫满屋",
        "sketch_spec_id": "1",
        "max_purchase_quantity": null,
        "min_purchase_quantity": null
      },
      {
        "id": 4,
        "title": "印花桌布",
        "subtitle": "生活需要仪式感，吃饭也一样。桌旗+桌布给你绚烂的生命色彩",
        "img": "http://i2.sleeve.7yue.pro/n10.png",
        "for_theme_img": "",
        "price": "119.00",
        "discount_price": "97.00",
        "description": null,
        "tags": "风袖臻选",
        "sketch_spec_id": "5",
        "max_purchase_quantity": null,
        "min_purchase_quantity": null
      },
      {
        "id": 1,
        "title": "青锋大碗",
        "subtitle": "大碗主要用来盛宽面，凡凡倾情推荐",
        "img": "http://i2.sleeve.7yue.pro/n9.png",
        "for_theme_img": "",
        "price": "12.99",
        "discount_price": "11.11",
        "description": null,
        "tags": "林白推荐",
        "sketch_spec_id": "1",
        "max_purchase_quantity": null,
        "min_purchase_quantity": null
      }
    ],
    themeD:{
      "id": 5,
      "title": "风袖甄选",
      "description": "甄选",
      "name": "t-3",
      "entrance_img": "http://i2.sleeve.7yue.pro/m9.png",
      "extend": null,
      "internal_top_img": "http://i2.sleeve.7yue.pro/m11.png",
      "title_img": "",
      "tpl_name": "diana",
      "online": true
    },
    themeE:{
      "id": 6,
      "title": "时尚穿搭",
      "description": "帅点才有女朋友",
      "name": "t-4",
      "entrance_img": "http://i2.sleeve.7yue.pro/m10.png",
      "extend": null,
      "internal_top_img": "http://i2.sleeve.7yue.pro/m12.png",
      "title_img": "",
      "tpl_name": "irelia",
      "online": true
    },
    bannerExt:{
      "id": 2,
      "name": "b-2",
      "description": "热销商品banner",
      "img": "http://i2.sleeve.7yue.pro/m4.png",
      "title": null,
      "items": [
        {
          "id": 5,
          "img": "http://i2.sleeve.7yue.pro/m6.png",
          "keyword": "28",
          "type": 1,
          "name": "left",
          "banner_id": 2
        },
        {
          "id": 6,
          "img": "http://i2.sleeve.7yue.pro/m7.png",
          "keyword": "26",
          "type": 1,
          "name": "right-top",
          "banner_id": 2
        },
        {
          "id": 7,
          "img": "http://i2.sleeve.7yue.pro/m8.png",
          "keyword": "27",
          "type": 1,
          "name": "right-bottom",
          "banner_id": 2
        }
      ]
    },
    spuBottom:{
      "total": 17,
      "count": 17,
      "page": 0,
      "total_page": 1,
      "items": [
        {
          "id": 23,
          "title": "双色牛仔裤",
          "subtitle": "秋冬新款，做一个Cool Boy",
          "img": "http://i2.sleeve.7yue.pro/n11.png",
          "for_theme_img": "http://i1.sleeve.7yue.pro/assets/702f2ce9-5729-4aa4-aeb3-921513327747.png",
          "price": "1399",
          "discount_price": null,
          "description": null,
          "tags": "",
          "sketch_spec_id": "1",
          "max_purchase_quantity": null,
          "min_purchase_quantity": null
        },
        {
          "id": 10,
          "title": "碳素墨水",
          "subtitle": "虽然我们早已不再使用钢笔书写，但钢笔在纸上划过的笔触永远是键盘无法替代的。一只钢笔+一瓶墨水在一个安静的午后，写写内心的故事。",
          "img": "http://i2.sleeve.7yue.pro/m24.png",
          "for_theme_img": "",
          "price": "80.00",
          "discount_price": "69.00",
          "description": null,
          "tags": "",
          "sketch_spec_id": null,
          "max_purchase_quantity": null,
          "min_purchase_quantity": null
        },
        {
          "id": 3,
          "title": "抹茶小橡皮",
          "subtitle": "小作文写错了，用它擦一擦",
          "img": "http://i2.sleeve.7yue.pro/m17.png",
          "for_theme_img": "https://gitee.com/lrelia7/sleeve-static/raw/master/theme/spu2.png",
          "price": "29.99",
          "discount_price": "17.00",
          "description": null,
          "tags": "一飞推荐",
          "sketch_spec_id": "1",
          "max_purchase_quantity": null,
          "min_purchase_quantity": null
        },
        {
          "id": 15,
          "title": "多彩别针、回形针",
          "subtitle": "每盒70个，可爱多彩",
          "img": "http://i2.sleeve.7yue.pro/m26.png",
          "for_theme_img": null,
          "price": "24",
          "discount_price": "19.9",
          "description": null,
          "tags": "三色可选",
          "sketch_spec_id": "1",
          "max_purchase_quantity": null,
          "min_purchase_quantity": null
        },
        {
          "id": 14,
          "title": "Ins 复古小夹子（Mini)",
          "subtitle": "静静的，享受时光的流逝",
          "img": "http://i2.sleeve.7yue.pro/m23.png",
          "for_theme_img": null,
          "price": "19.9",
          "discount_price": null,
          "description": null,
          "tags": "三色可选",
          "sketch_spec_id": null,
          "max_purchase_quantity": null,
          "min_purchase_quantity": null
        },
        {
          "id": 8,
          "title": "Ins复古碎花NoteBook",
          "subtitle": "林白默默的掏出小本本，将她说的话一次不漏的记了下来。",
          "img": "http://i2.sleeve.7yue.pro/m19.png",
          "for_theme_img": "http://i1.sleeve.7yue.pro/assets/b6442702-4810-46cb-bb0b-f4602d38e4ff.png",
          "price": "29.99",
          "discount_price": "27.8",
          "description": null,
          "tags": "林白推荐",
          "sketch_spec_id": "1",
          "max_purchase_quantity": null,
          "min_purchase_quantity": null
        },
        {
          "id": 28,
          "title": "Ins复古金色落地灯",
          "subtitle": "Instagram复古台灯，就在此刻回到过去，找寻逝去的记忆",
          "img": "http://i2.sleeve.7yue.pro/a9.png",
          "for_theme_img": "",
          "price": "999",
          "discount_price": null,
          "description": null,
          "tags": "Ins$复古流行",
          "sketch_spec_id": "8",
          "max_purchase_quantity": null,
          "min_purchase_quantity": null
        },
        {
          "id": 26,
          "title": "SemiConer柔质沙发",
          "subtitle": "窝在沙发上，一杯红酒配电影",
          "img": "http://i2.sleeve.7yue.pro/3.png",
          "for_theme_img": "",
          "price": "4799",
          "discount_price": "4200",
          "description": null,
          "tags": "",
          "sketch_spec_id": "1",
          "max_purchase_quantity": null,
          "min_purchase_quantity": null
        },
        {
          "id": 25,
          "title": "复古双色沙发",
          "subtitle": "双色可选，经典青黄两色",
          "img": "http://i2.sleeve.7yue.pro/h3.png",
          "for_theme_img": "",
          "price": "3999",
          "discount_price": null,
          "description": null,
          "tags": "复刻经典$双色可选",
          "sketch_spec_id": "1",
          "max_purchase_quantity": null,
          "min_purchase_quantity": null
        },
        {
          "id": 24,
          "title": "秋冬新款驼色大衣",
          "subtitle": "2020新款，暖暖过秋冬",
          "img": "http://i2.sleeve.7yue.pro/n3.png",
          "for_theme_img": "http://i1.sleeve.7yue.pro/assets/b8e510a1-8340-43c2-a4b0-0e56a40256f9.png",
          "price": "2999",
          "discount_price": "2699",
          "description": null,
          "tags": "经典单色",
          "sketch_spec_id": "1",
          "max_purchase_quantity": null,
          "min_purchase_quantity": null
        },
        {
          "id": 27,
          "title": "Mier双色靠椅",
          "subtitle": "安静的午后，一杯清茶，追忆似水年华。看清风浮动，看落日余晖",
          "img": "http://i2.sleeve.7yue.pro/h1.png",
          "for_theme_img": "http://i1.sleeve.7yue.pro/assets/f6c9fce8-626f-44c0-a709-3f6ef9f3fbef.png",
          "price": "1299",
          "discount_price": null,
          "description": null,
          "tags": "",
          "sketch_spec_id": "1",
          "max_purchase_quantity": null,
          "min_purchase_quantity": null
        },
        {
          "id": 12,
          "title": "林间有风测试商品",
          "subtitle": "测试商品，可购买体验完整支付和订单流程",
          "img": "http://i2.sleeve.7yue.pro/x1.png",
          "for_theme_img": "",
          "price": "0.2",
          "discount_price": null,
          "description": null,
          "tags": "测试数据$可支付",
          "sketch_spec_id": null,
          "max_purchase_quantity": null,
          "min_purchase_quantity": null
        },
        {
          "id": 11,
          "title": "飞行员墨镜",
          "subtitle": "戴起来像小李子",
          "img": "http://i2.sleeve.7yue.pro/n2.png",
          "for_theme_img": "",
          "price": "77.00",
          "discount_price": null,
          "description": null,
          "tags": null,
          "sketch_spec_id": null,
          "max_purchase_quantity": null,
          "min_purchase_quantity": null
        },
        {
          "id": 6,
          "title": "Sleeve风袖说牛仔系列",
          "subtitle": "Sleeve风袖说当季经典款",
          "img": "http://i2.sleeve.7yue.pro/n14.png",
          "for_theme_img": "",
          "price": "1799",
          "discount_price": "",
          "description": null,
          "tags": "包邮$热门",
          "sketch_spec_id": "1",
          "max_purchase_quantity": null,
          "min_purchase_quantity": null
        },
        {
          "id": 2,
          "title": "林间有风自营针织衫",
          "subtitle": "秋日冬款，浪漫满屋",
          "img": "http://i1.sleeve.7yue.pro/assets/ecf8d824-19d4-4db2-a5da-872ab014fecd.png",
          "for_theme_img": "https://gitee.com/lrelia7/sleeve-static/raw/master/theme/spu1.png",
          "price": "77.00",
          "discount_price": "62.00",
          "description": null,
          "tags": "秋日冬款$浪漫满屋",
          "sketch_spec_id": "1",
          "max_purchase_quantity": null,
          "min_purchase_quantity": null
        },
        {
          "id": 4,
          "title": "印花桌布",
          "subtitle": "生活需要仪式感，吃饭也一样。桌旗+桌布给你绚烂的生命色彩",
          "img": "http://i2.sleeve.7yue.pro/n10.png",
          "for_theme_img": "",
          "price": "119.00",
          "discount_price": "97.00",
          "description": null,
          "tags": "风袖臻选",
          "sketch_spec_id": "5",
          "max_purchase_quantity": null,
          "min_purchase_quantity": null
        },
        {
          "id": 1,
          "title": "青锋大碗",
          "subtitle": "大碗主要用来盛宽面，凡凡倾情推荐",
          "img": "http://i2.sleeve.7yue.pro/n9.png",
          "for_theme_img": "",
          "price": "12.99",
          "discount_price": "11.11",
          "description": null,
          "tags": "林白推荐",
          "sketch_spec_id": "1",
          "max_purchase_quantity": null,
          "min_purchase_quantity": null
        }
      ]
    },
    topTheme_api:{},
    topBanner_api:{},
    category_api:{},
    coupontheme_api:{},
    spuData: []
  },

  onLoad: function (options) {
    console.log('进入initAll')
    this.initAll();
    console.log('完成initAll')
  },

  async initAll() {
    //Lin-UI测试
    const themeApi = await Theme.getHomeTopLocationA();
    const bannerApi = await Banner.getHomeBanner();
    const category = await Category.getHomeCategory();
    const coupontheme = await Coupontheme.getHomeCouponTheme();
    const spuData = this.data.spuDataAll.slice(0,8);
    this.setData({
      topTheme_api: themeApi[0],
      topBanner_api: bannerApi,
      category_api: category,
      coupontheme_api: coupontheme,
      spuData: spuData
    })
    console.log('end')
  },

  onReady: function () {
    
  },

  onShow: function () {

  },

  onPullDownRefresh: function () {

  },

  onReachBottom: function () {

  },

  onShareAppMessage: function () {

  }
})