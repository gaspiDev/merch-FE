import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import "./Carousel.css";

// Define the product data
const products = [
  {
    image: "https://firebasestorage.googleapis.com/v0/b/merch-images-0909.firebasestorage.app/o/producto-1-removebg-preview.png?alt=media&token=58c4b239-b880-47af-a9f2-f32bf620f794",
  },
  {
    image: "https://firebasestorage.googleapis.com/v0/b/merch-images-0909.firebasestorage.app/o/producto-2-removebg-preview.png?alt=media&token=3d91c263-1d84-4bce-9ddb-87628944c5ea",
  },
  {
    image: "https://firebasestorage.googleapis.com/v0/b/merch-images-0909.firebasestorage.app/o/producto-3-removebg-preview.png?alt=media&token=5634db78-6a94-43ce-a26b-b6189e2582d2",
  },
  {
    image: "https://firebasestorage.googleapis.com/v0/b/merch-images-0909.firebasestorage.app/o/producto-4.1-removebg-preview.png?alt=media&token=f0af3470-b984-481c-8375-6237cd6a0650",
  },
  {
    image: "https://firebasestorage.googleapis.com/v0/b/merch-images-0909.firebasestorage.app/o/producto-5-removebg-preview.png?alt=media&token=09aa148c-1995-4821-8bb8-e899309f8350",
  },
  {
    image: "https://firebasestorage.googleapis.com/v0/b/merch-images-0909.firebasestorage.app/o/producto-2-removebg-preview.png?alt=media&token=3d91c263-1d84-4bce-9ddb-87628944c5ea",
  },
  {
    image: "https://firebasestorage.googleapis.com/v0/b/merch-images-0909.firebasestorage.app/o/producto-3-removebg-preview.png?alt=media&token=5634db78-6a94-43ce-a26b-b6189e2582d2",
  },
];

const Carousel = () => {
  return (
    <div className="w-full mb-12 overflow-x-hidden">
      <Swiper
        modules={[EffectCoverflow, Autoplay, Pagination]}
        effect={'fade'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{
          clickable: true, // allows clicking dots
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        className="w-full"
      >
        {products.map((product, index) => (
          <SwiperSlide key={product.id} className="py-2 transition-all duration-300 ease-in-out">
            {({ isActive }) => (
              <div className={`
                object-cover rounded-lg
                transition-all duration-300 ease-in-out
                ${isActive ? 'scale-110 opacity-100' : 'scale-90 opacity-50'}
                `}>
                <img
                  src={product.image}
                  alt={`Product ${product.id}`}
                  className="w-60 object-cover rounded-lg"
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;