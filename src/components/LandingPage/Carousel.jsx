import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import "./Carousel.css";

// Define the product data
const products = [
  { image: "https://firebasestorage.googleapis.com/v0/b/merch-images-0909.firebasestorage.app/o/producto-1-removebg-preview.png?alt=media&token=58c4b239-b880-47af-a9f2-f32bf620f794" },
  { image: "https://firebasestorage.googleapis.com/v0/b/merch-images-0909.firebasestorage.app/o/producto-2-removebg-preview.png?alt=media&token=3d91c263-1d84-4bce-9ddb-87628944c5ea" },
  { image: "https://firebasestorage.googleapis.com/v0/b/merch-images-0909.firebasestorage.app/o/producto-3-removebg-preview.png?alt=media&token=5634db78-6a94-43ce-a26b-b6189e2582d2" },
  { image: "https://firebasestorage.googleapis.com/v0/b/merch-images-0909.firebasestorage.app/o/producto-4.1-removebg-preview.png?alt=media&token=f0af3470-b984-481c-8375-6237cd6a0650" },
  { image: "https://firebasestorage.googleapis.com/v0/b/merch-images-0909.firebasestorage.app/o/producto-5-removebg-preview.png?alt=media&token=09aa148c-1995-4821-8bb8-e899309f8350" }
];

const Carousel = () => {
  return (
    <div className="w-full mb-12 flex justify-center items-center">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={3}
        spaceBetween={32}
        centeredSlides={true}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        className="w-full max-w-4xl"
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 3 },
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            {({ isActive, isPrev, isNext }) => (
              <img
                src={product.image}
                alt={`Producto ${index + 1}`}
                loading="lazy"
                className={`
                  transition-all duration-300
                  mx-auto
                  object-contain
                  ${isActive ? 'opacity-100 scale-105 z-10' : 'opacity-40 scale-95'}
                  w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72
                `}
                style={{
                  maxHeight: '30rem',
                }}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;