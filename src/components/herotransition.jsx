import { useState, useEffect } from 'react';

const ImageTransition = ({ src }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setLoaded(true);
    };

    const image = new Image();
    image.src = src;
    image.addEventListener('load', handleLoad);

    return () => {
      image.removeEventListener('load', handleLoad);
    };
  }, [src]);

  return (
    <div className={`w-screen h-screen fixed inset-0 flex items-center justify-center transition-opacity ${loaded ? 'opacity-100' : 'opacity-0'}`}>
      <img src={src} alt="Main" className="max-w-full max-h-full" />
    </div>
  );
};

export default ImageTransition;
