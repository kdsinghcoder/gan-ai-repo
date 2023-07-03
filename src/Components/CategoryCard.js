import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilter } from '../redux/storeSlice';

const CategoryCard = (name) => {
  const dispatch = useDispatch();

  const [isMobile, setIsMobile] = useState(false);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener('resize', handleResize);
  });

  return (
    <div
      className={`flex ${isMobile ? '' : 'bg-white'} shadow-sm rounded-lg overflow-hidden w-[250px] h-[100px]`}
      onClick={(e) => dispatch(updateFilter(name.name))}
    >
      {!isMobile && (
        <div className="w-[30%] flex items-center justify-center">
          <img
            src={require(`../assets/images/${name.name.toLowerCase()}.png`)}
            alt="Card Image"
            className="w-[auto] h-[auto] object-cover h-full mix-blend-multiply"
          />
        </div>
      )}

      <div className={`w-[70%] p-3}  ${isMobile ? 'w-[100%]' : ''}}` }>
        <h2 className="text-xl text-purple-700 italic">{name.name}</h2>
        <p className="text-sm text-gray-600">Click to view</p>
      </div>
    </div>
  );
};

export default CategoryCard;
