import React from 'react';
import Header from '../Components/Header';
import StickyNavbar from '../Components/StickyNavbar';
import SectionDivider from '../Components/SectionDivider';
import ProductContainer from '../Components/ProductContainer';
import ShoppingCartIcon from "../Components/ShoppingCartIcon"
function Home() {
  return (
    <>
      <Header />
      <StickyNavbar />
      <SectionDivider heading="Our Products" line="Discover our latest offerings."/>
      <ProductContainer />
      <ShoppingCartIcon />
    </>
  );
}

export default Home;
