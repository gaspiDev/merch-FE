import { ArrowRight, BaggageClaim, ShoppingBag, ChevronDown, Menu, ArrowDown, ArrowUp } from "lucide-react"
import { Outlet } from "react-router"
import NavItem from "../NavItem/NavItem"
import { useState, useEffect, useRef } from "react"

const App = () => {

  const [openMenu, setOpenMenu] = useState(false);

  // ⬇️ NEW: reference the whole header area (button + menu live inside)
  const headerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setOpenMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header ref={headerRef} className="w-screen bg-beige pb-12">
        <div className="flex items-center p-3 justify-between border-b-2 border-airbnb  shadow-lg">
          <div className="flex items-center"><BaggageClaim className="size-9 md:size-10 lg:size-12 xl:size-14 text-airbnb" />
            <p className="text-airbnb text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-inter font-bold -tracking-widest cursor-pointer">
              merch
            </p>
          </div>
          <div className="flex items-center gap-2">

            <button
              onClick={() => setOpenMenu(!openMenu)}
              className="flex items-center gap-1 py-2 pr-1 pl-2 bg-airbnb rounded-lg"
            >
              <span className="text-beige text-sm font-inter font-medium">Menu</span>
              <ChevronDown
                className={`size-5 text-beige transform transition-transform duration-300 ${openMenu ? "rotate-180" : "rotate-0"
                  }`}
              />
            </button>

          </div>
        </div>
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openMenu ? "max-h-40 opacity-100 scale-y-100 shadow-lg" : "max-h-0 opacity-0 scale-y-0"
          }`}>
          <ul className="bg-beige">
            <div className="grid grid-cols-3 gap-4 p-3 shadow-lg border-b-2 border-airbnb">
              <NavItem label="Inicio" path="/" />
              <NavItem label="Catalogo" path="/catalogo" />
              <NavItem label="Presupuesto" path="/presupuesto" />
            </div>
          </ul>
        </div>
      </header>
      <main className="">
        <Outlet></Outlet>
      </main>
      {/* <footer className="flex justify-around items-center p-10">
      <div className="w-[1400px] rounded-[40px] p-[120px] bg-black">
        <div className="flex justify-between gap-16">
          <div className="flex flex-col gap-y-24">
            <div className="flex flex-col">
              <p className="flex gap-4 items-center font-inter font-extrabold text-2xl text-white"><span><BaggageClaim size={32}></BaggageClaim></span>MERCH</p>
              <p className="text-nowrap pl-12 font-inter text-xl text-white">Branded Merch,<br />Seamlessly Delivered.</p>
            </div>
            <button className="flex items-center gap-2 font-inter text-lg font-[500] text-black bg-white px-8 py-4 rounded-xl cursor-pointer">
              <div className="bg-black p-1 rounded-lg"><ArrowRight size={18} color="white"></ArrowRight></div>Ask for Budget!
            </button>
          </div>
          <ul className="flex flex-col gap-y-6">
            <li className="font-inter text-lg font-[500] text-white cursor-pointer">Products</li>
            <li className="font-inter text-lg font-[500] text-white cursor-pointer">About us</li>
            <li className="font-inter text-lg font-[500] text-white">Copyright</li>
          </ul>
        </div>
      </div>
    </footer> */}
    </>
  )
}

export default App
