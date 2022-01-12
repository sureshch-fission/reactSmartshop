import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "Products",
  initialState: {
    products: [],
    filtered:null,
    message: [],
    data: [],
    quantity: 0,
    keyword:''
  },
  reducers: {
    fetchData(state, action) {
      const productdata = action.payload;

      state.products.push(productdata);
      state.quantity = 1
    },
    filterProducts(state, action) {
      const data = action.payload;
      console.log(data)
      const data1 = data.toLowerCase();
      state.keyword = data1
    },
  
  filter(state, action){

    const data = action.payload;
    let filteredproducts = [];
    console.log(data)
    state.products.map(product => {
    
     
      if(data === ""){
        return state.products
       }else if(product.name.toLowerCase().includes(data.toLowerCase())){
        state.message.push(product)
        state.products = {};
      
        filteredproducts.push(product);
       }
      
     
    });
    state.products = filteredproducts
    
  }
}
   
});

export const productActions = ProductSlice.actions;
export default ProductSlice;
