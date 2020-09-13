import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutation-types'

export default {
  addCart(context, payload) {
    //1.查找之前的陣列中是否有該商品
    let oldProduct = context.state.cardList.find(item => item.iid === payload.iid)

    //2.判斷oldProduct
    if (oldProduct) { //判斷oldProduct有內容，便將內容的count屬性+1
      // oldProduct.count += 1
      //將任務分發進mutations
      context.commit(ADD_COUNTER, oldProduct)
    } else {
      payload.count = 1 //如果沒有便為傳入的物件賦予新屬性count，此時count為1
      //state.cardList.push(payload) //再將傳入的物件保存至state中
      context.commit(ADD_TO_CART, payload)
    }
  }
}