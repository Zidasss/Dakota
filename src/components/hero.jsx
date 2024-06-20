import { useState, useEffect, useRef, useCallback } from 'react';
import heroImage1 from '../assets/Home.jpeg';
import heroImage2 from '../assets/Home2.jpeg';
import heroImage3 from '../assets/Home3.jpeg';

function Hero() {
  const [currentImage, setCurrentImage] = useState(1);
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [hasMouseOverHappened, setHasMouseOverHappened] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isShrinking, setIsShrinking] = useState(false);
  const [switchingSpeed, setSwitchingSpeed] = useState(600);
  const mouseMoveCounterRef = useRef(0);
  const intervalIdRef = useRef(null);
  const prevMouseXRef = useRef(null);

  const switchImage = useCallback(() => {
    setCurrentImage((prevImage) => (prevImage === 3 ? 1 : prevImage + 1));
  }, []);

  useEffect(() => {
    // Start the image switching interval immediately
    const intervalId = setInterval(switchImage, switchingSpeed);
    intervalIdRef.current = intervalId;

    return () => clearInterval(intervalId);
  }, [switchingSpeed, switchImage]);

  useEffect(() => {
    if (isMouseOver || hasMouseOverHappened || isExpanded) {
      clearInterval(intervalIdRef.current);
    } else {
      const intervalId = setInterval(switchImage, switchingSpeed);
      intervalIdRef.current = intervalId;
      return () => clearInterval(intervalId);
    }
  }, [isMouseOver, hasMouseOverHappened, isExpanded, switchingSpeed, switchImage]);

  const handleMouseMove = useCallback((e) => {
    mouseMoveCounterRef.current += 1;
    if (mouseMoveCounterRef.current >= 15) {
      if (prevMouseXRef.current !== null && e.clientX !== prevMouseXRef.current) {
        switchImage();
      }
      prevMouseXRef.current = e.clientX;
      setIsMouseOver(true);
      setHasMouseOverHappened(true);
      mouseMoveCounterRef.current = 0;
    }
  }, [switchImage]);

  useEffect(() => {
    const handleResize = () => setIsExpanded(window.innerWidth <= 640);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsExpanded(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setIsMenuVisible(!isExpanded);
  }, [isExpanded]);

  const handleMouseEnter = () => {
    setHasMouseOverHappened(true);
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
    }
  };

  const getImageSource = (imageNumber) => {
    switch (imageNumber) {
      case 1:
        return heroImage1;
      case 2:
        return heroImage2;
      case 3:
        return heroImage3;
      default:
        return heroImage1;
    }
  };

  return (
    <div onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter}>
      <div
        id="frame"
        className={`bg-gray-500 overflow-hidden flex justify-center items-center m-4 mb-8 h-screen rounded-md cursor-pointer ${
          isExpanded ? 'expanded' : ''
        }`}
        onMouseLeave={() => setIsMouseOver(false)}
      >
        <img src={getImageSource(currentImage)} alt="Imagem" />
      </div>
    </div>
  );
}

export default Hero;
