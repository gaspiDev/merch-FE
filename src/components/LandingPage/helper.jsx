// src/components/CarouselWithShadow.jsx
import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import { useState } from "react"

const products = [
  { id: 1, name: "Phone X", price: "$699", image: "https://firebasestorage.googleapis.com/v0/b/merch-images-0909.firebasestorage.app/o/producto-1.jpg?alt=media&token=9f1c6164-7650-4ea2-ad9e-17791e78da26" },
  { id: 2, name: "Laptop Pro", price: "$1199", image: "https://firebasestorage.googleapis.com/v0/b/merch-images-0909.firebasestorage.app/o/producto-2.jpg?alt=media&token=d4c2f1c7-cb6d-442d-81fd-06b7a4d12d85" },
  { id: 3, name: "Headphones", price: "$199", image: "https://firebasestorage.googleapis.com/v0/b/merch-images-0909.firebasestorage.app/o/producto-3.jpg?alt=media&token=b0386bb8-7039-44dd-bdb2-8ef236c38773" },
  { id: 4, name: "Smartwatch", price: "$299", image: "https://firebasestorage.googleapis.com/v0/b/merch-images-0909.firebasestorage.app/o/producto-4.jpg?alt=media&token=2a4eb6bd-03cc-4c1d-a5b6-37c1cab998b4" },
  { id: 5, name: "Camera", price: "$499", image: "https://firebasestorage.googleapis.com/v0/b/merch-images-0909.firebasestorage.app/o/producto-5.jpg?alt=media&token=367abd59-cf63-4d83-aebe-f7a2c6de52b0" },
]

export default function CarouselWithShadow() {
  const [currentSlide, setCurrentSlide] = useState(1)

  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: { perView: 3, spacing: 15 },
    centered: true,
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel) // updates active index
    },
  })

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <div ref={sliderRef} className="keen-slider">
        {products.map((product, idx) => (
          <div
            key={product.id}
            className={`keen-slider__slide flex flex-col items-center justify-center transition-all duration-300 
              ${currentSlide === idx ? "scale-100 opacity-100 z-10" : "scale-90 opacity-50"} 
            `}
          >
            <div className="relative w-full rounded-xl shadow-xl overflow-hidden bg-white">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-white">
                <h2 className="text-lg font-semibold">{product.name}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
