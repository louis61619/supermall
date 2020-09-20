// module.exports = {
//   plugins: {
//     autoprefixer: {},
//     "postcss-px-to-viewport": {
//       viewportWidth: 375, //视口的宽度，对应的时设计稿的宽度/2，一般为750
//       viewportHeight: 667, //视口的高度，对应的是设计稿的高度（也可以不配置）
//       unitPrecision: 5, //指定‘px’转换为视口单位值的小数位数（很多时候无法整除）
//       viewportUnit: 'vw', //指定需要转换成的视口单位，建议使用vw
//       selectorBlankList: ['ignore', 'tab-bar'], //指定不需要转换的类
//       minPixelValue: 1, //小于或等于‘1px’不转换为视口单位
//       mediaQuery: false,//允许在媒体查询中转换为‘px’
//       exclude: [/TabBar/]  //不需要转化的组件文件名正则，必须是正则表达式
//     }
//   }
// }

// 1. 在JS中使用正則: /正則相關規則/
// 2. exclude中存放的元素必須是正則表達式
// 3. 按照排除的問件寫對應的正則

// 正則的規則:
// 1. ^abc: 表示匹配的內容，必須以甚麼開頭(以abc開頭)
// 2. abc$: 表示匹配的內容，必須以甚麼結尾(以abc結尾)