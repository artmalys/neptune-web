import { useState, useEffect } from 'react';

export const useIsClickOutside = ({ ref }) => {
  const [isClickOutside, setIsClickOutside] = useState(true);

  useEffect(() => {
    const updateIsClickOutside = (event) => {
      if (ref && !ref.current.contains(event.target)) {
        setIsClickOutside(true);
      } else {
        setIsClickOutside(false);
      }
    };
    document.addEventListener('click', updateIsClickOutside, true);

    return () => document.removeEventListener('click', updateIsClickOutside, true);
  }, []);

  return [isClickOutside];
};
