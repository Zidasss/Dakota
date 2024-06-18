import { useState, useEffect } from 'react';
import heroImage1 from '../assets/Home.jpeg';
import heroImage2 from '../assets/Home2.jpeg';
import heroImage3 from '../assets/Home3.jpeg';

function Hero() {
  const [state, setState] = useState({
    currentImage: 1,
    prevMouseX: null,
    switchingSpeed: 600,
    isExpanded: true,
    isMouseOver: false,
    hasMouseOverHappened: false,
    isMenuVisible: false,
    intervalId: null,
    mouseMoveCounter: 0,
    hasMouseEntered: false,
    isShrinking: false,
    isAnimationComplete: false,
  });

  useEffect(() => {
    const { switchingSpeed, isShrinking, hasMouseEntered } = state;

    const id = setInterval(() => {
      setState(prevState => ({
        ...prevState,
        currentImage: prevState.currentImage === 3 ? 1 : prevState.currentImage + 1,
      }));
    }, isShrinking ? 700 : switchingSpeed); // Alteração da velocidade quando a imagem está diminuindo

    setState(prevState => ({ ...prevState, intervalId: id }));

    return () => {
      clearInterval(id);
    };
  }, [state.switchingSpeed, state.isShrinking, state.hasMouseEntered]);

  const handleMouseMove = e => {
    const { isShrinking, intervalId, prevMouseX, mouseMoveCounter } = state;
    setState(prevState => ({ ...prevState, mouseMoveCounter: prevState.mouseMoveCounter + 1 }));

    if (!isShrinking && intervalId) {
      clearInterval(intervalId);
      setState(prevState => ({ ...prevState, intervalId: null }));
    }

    if (mouseMoveCounter >= 15) {
      if (prevMouseX && e.clientX !== prevMouseX) {
        setState(prevState => ({
          ...prevState,
          currentImage: prevState.currentImage === 3 ? 1 : prevState.currentImage + 1,
        }));
      }

      setState(prevState => ({
        ...prevState,
        prevMouseX: e.clientX,
        isMouseOver: true,
        hasMouseOverHappened: true,
        mouseMoveCounter: 0,
      }));
    }
  };

  const handleMouseEnter = () => {
    const { isShrinking, intervalId } = state;
    setState(prevState => ({ ...prevState, hasMouseEntered: true }));

    if (!isShrinking && intervalId) {
      clearInterval(intervalId);
      setState(prevState => ({ ...prevState, intervalId: null }));
    }
  };

  const getImageSource = imageNumber => {
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

  useEffect(() => {
    const { isMouseOver, hasMouseOverHappened, isExpanded, switchingSpeed } = state;
    const switchImage = () => {
      if (!isExpanded) {
        setState(prevState => ({
          ...prevState,
          currentImage: prevState.currentImage === 3 ? 1 : prevState.currentImage + 1,
        }));
      }
    };

    switchImage();

    const timer = setInterval(switchImage, switchingSpeed);

    if (isMouseOver || hasMouseOverHappened || isExpanded) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [state.isMouseOver, state.hasMouseOverHappened, state.switchingSpeed, state.isExpanded]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setState(prevState => ({ ...prevState, isExpanded: false }));
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setState(prevState => ({
        ...prevState,
        isExpanded: window.innerWidth <= 640,
      }));
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setState(prevState => ({ ...prevState, isMenuVisible: !prevState.isExpanded }));
  }, [state.isExpanded]);

  return (
    <div onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter}>
      <div
        id="frame"
        className={`bg-gray-500 overflow-hidden flex justify-center items-center m-4 mb-8 h-screen rounded-md cursor-pointer ${
          state.isExpanded ? 'expanded' : ''
        }`}
        onMouseLeave={() => setState(prevState => ({ ...prevState, isMouseOver: false }))}
      >
        <img src={getImageSource(state.currentImage)} alt="Imagem" />
      </div>
    </div>
  );
}

export default Hero;
