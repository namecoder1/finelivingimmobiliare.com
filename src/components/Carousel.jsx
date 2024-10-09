const Carousel = ({ images }) => {

  return (
    <div className="carousel w-full my-5">
      {
        images.map((image, index) => {
          return (
            <img
              key={index}
              src={image}
              alt={`Immagine ${index + 1}`}
              className="w-full object-cover carousel-item"
            />
          );
        })
      }
    </div>
  );
};

export default Carousel;
