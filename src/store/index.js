import Vue from 'vue'
import Vuex from 'vuex'

//1.安裝插件
Vue.use(Vuex)



//2.創建對象

const store = new Vuex.Store({
  state: {
    cardList: []
  },
  mutations: {
    addCart(state, payload) {

      //陣列常用的方法: push/shift/pop/unshift/sort/reverse/sort/map/filter
      
      //payload新添加的商品
      // let oldProduct = null;
      // for(let item of state.cardList){ //循環cardList陣列查找子元素中的iid和傳入的iid是否重複
      //   if(item.iid === payload.iid) {
      //     oldProduct = item //如果重複將傳入的物件賦值給oldProduct
      //   }
      // }

      //使用查找
      // let oldProduct = state.cardList.find((item) => {
      //   return item.iid === payload.iid
      // })

      //簡化
      let oldProduct = state.cardList.find(item => item.iid === payload.iid)

      //判斷oldProduct
      if(oldProduct) { //判斷oldProduct有內容，便將內容的count屬性+1
        oldProduct.count += 1
      } else {
        payload.count = 1 //如果沒有便為傳入的物件賦予新屬性count，此時count為1
        state.cardList.push(payload) //再將傳入的物件保存至state中
      }
    }
  }


})


//3.導出store
export default store