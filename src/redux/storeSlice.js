import { createSlice } from '@reduxjs/toolkit';
import data from '../utils/items.json';

const initialState = {
  AllProducts: data,
  InCartProducts: [],
  value: 0,
  Filter: '',
};

export const storeSlice = createSlice({
  name: 'bakery-store',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.InCartProducts = [...state.InCartProducts, action.payload];
    },
    updateFilter: (state, action) => {
      if (state.Filter === action.payload) {
        state.Filter = '';
      } else {
        state.Filter = action.payload;
      }
    },
    removeFromCart: (state, action) => {
      state.InCartProducts = state.InCartProducts.filter(
        (obj) => obj.product_id !== action.payload.product_id
      );
    },
  },
});

export const { addToCart, updateFilter, removeFromCart } = storeSlice.actions;

export default storeSlice.reducer;
