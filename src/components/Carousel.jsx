import { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-6 grid-rows-1 my-5">
      {/* Immagine principale */}
      <div className="relative col-span-5">
        <img
          src={images[currentIndex]}
          alt={`Foto Immobile Numero ${currentIndex + 1}`}
          className="max-w-full max-h-1/2 object-cover"
        />
        <div className="absolute inset-0 flex justify-between items-center px-4">
          <button
            onClick={prevImage}
            className="bg-black bg-opacity-50 text-white p-2 rounded-full"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M20 11v2H8l5.5 5.5l-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5L8 11z"/></svg>
          </button>
          <button
            onClick={nextImage}
            className="bg-black bg-opacity-50 text-white p-2 rounded-full"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11z"/></svg>
          </button>
        </div>
      </div>

      {/* Slider con miniature */}
      <div className="grid grid-rows-1 grid-cols-5 lg:grid-cols-1 lg:grid-rows-5 m-2  justify-evenly overflow-x-auto col-span-1">
        {images.slice(0, 5).map((image, index) => (
          <div
            key={index}
            className={`max-w-60 cursor-pointer border-2 ${
              index === currentIndex ? 'border-white opacity-100' : 'border-transparent opacity-50'
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            <img src={image} alt={`Foto Immobile Numero ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
