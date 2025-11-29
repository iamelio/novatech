// hooks/useSlideshow.js
import { useState, useEffect } from 'react';
const useSlideshow = (totalSlides, autoPlay = true, interval = 3000) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval]);
  return {
    currentSlide,
    nextSlide,
    prevSlide,
    goToSlide
  };
};
export default useSlideshow;