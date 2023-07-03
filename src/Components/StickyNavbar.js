import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';
const StickyNavbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= stickyOffset) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    const navbar = document.getElementById('navbar');
    const stickyOffset = navbar.offsetTop;

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      id="navbar"
      className={`flex flex-row justify-center items-center gap-2 h-[100px] w-[60%] mx-auto mt-[-40px] z-50 ${
        isSticky
          ? 'sticky top-0 w-[100%] transition-all duration-300'
          : 'relative transition-all duration-300'
      } shadow-lg overflow-x-auto bg-[#FFFFEE]`}
    >
      <CategoryCard name="donuts" />
      <CategoryCard name="pastries" />
      <CategoryCard name="cupcakes" />
      <CategoryCard name="cookies" />
      <CategoryCard name="others" />
    </div>
  );
};

export default StickyNavbar;
