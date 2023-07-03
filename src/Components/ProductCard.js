import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addToCart, removeFromCart } from '../redux/storeSlice';

function ProductCard(product) {
  const dispatch = useDispatch();
  const InCartProducts = useSelector((state) => state.store.InCartProducts);

  return (
    <div class="flex items-center justify-center hover:transform hover:scale-105 hover:shadow-xl my-4">
      <div class="w-[300px] max-w-sm h-[400px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center">
        <img
          class="w-full h-[250px]"
          src={product.product.image}
          alt=""
        />
        <p class="mt-4 text-center bg-white">{product.product.name}</p>
        <p class="mt-2 text-center text-red-400 bg-white">
          $ {product.product.price}
        </p>
        {!InCartProducts.some(
          (item) => item.product_id === product.product.product_id
        ) ? (
          <button
            class="mt-3  text-red-400 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-300 hover:text-black hover:border-black rounded-md px-4 py-2 transform translate-y-[40px]"
            onClick={(e) => {
              dispatch(addToCart(product.product));
            }}
          >
            Add to cart
          </button>
        ) : (
          <button
            class="mt-3  text-red-400 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-300 hover:text-black hover:border-black rounded-md px-4 py-2 transform translate-y-[40px]"
            onClick={(e) => {
              dispatch(removeFromCart(product.product));
            }}
          >
            Remove
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
