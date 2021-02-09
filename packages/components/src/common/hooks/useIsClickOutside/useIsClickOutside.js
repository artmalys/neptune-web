import { useState, useEffect } from 'react';

export const useIsClickOutside = ({ ref }) => {
  const [isClickOutside, setIsClickOutside] = useState(false);

  useEffect(() => {
    const updateIsClickOutside = (event) => {
      let isClickOutsideElements = true;

      // If the click is triggered from at least one of the elements provided set isClickOutsideElements to false
      ref.forEach((el) => {
        if (el?.current?.contains(event.target)) {
          isClickOutsideElements = false;
        }
      });

      setIsClickOutside(isClickOutsideElements);
    };
    document.addEventListener('click', updateIsClickOutside, true);

    return () => document.removeEventListener('click', updateIsClickOutside, true);
  }, []);

  return [isClickOutside];
};
