import React from 'react';
import ProductCard from './ProductCard';
import { useSelector, useDispatch } from 'react-redux';

function ProductContainer() {
  const AllProducts = useSelector((state) => state.store.AllProducts);
  const Filter = useSelector((state) => state.store.Filter);

  if (AllProducts === undefined) {
    return <div>Loading....</div>;
  }

  if (Filter === '') {
    return (
      <div
        id="productContainer"
        className="container flex flex-wrap gap-4 px-10 justify-center items-center"
      >
        {AllProducts.map((product) => {
          return <ProductCard product={product} />;
        })}
      </div>
    );
  } else {
    return (
      <div
        id="productContainer"
        className="container flex flex-wrap gap-4 px-10 justify-center items-center"
      >
        {AllProducts.filter((obj) => obj.category.toLowerCase() === Filter).map(
          (product) => {
            return <ProductCard product={product} />;
          }
        )}
      </div>
    );
  }
}

export default ProductContainer;
