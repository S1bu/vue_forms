import { createStore } from 'vuex'
const dataURL = "https://codjoelmayer.github.io/JTLaptopData/data/"  //the jason server link goes here
export default createStore({
  state: {
    products:null,
    spinner: false
  },
  getters: {
  },
  mutations: {
    setProducts(state, products){
      state.products = products   
    },
    setSpinner(state, value){
      state.spinner = value   //while waiting on your products to load
    }
  },
  actions: {
    async fetchProducts(context){
      try{
        let res = await fetch(dataURL);
        let { products } = await res.json()
        if(products){
          context.commit('setProducts',products)
          context.commit('setSpinner',false)
        }else{
          context.commit('setSpiner',true)
        }
      }catch(e){
        console.log(e.message);  //message that pops up when when you products fail to load
      }
    }
  },
  modules: {
  }
})
