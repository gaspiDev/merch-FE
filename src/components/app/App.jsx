import { ArrowRight, BaggageClaim, ShoppingBag } from "lucide-react"

const App = () => {

  return (
    <>
      <header className="bg-[#f5f3ed] flex justify-around items-center p-10 pt-8 rounded-b-xl">
        <div className="flex w-[1400px] justify-between items-top">
          <p className="flex gap-1 items-center font-inter font-bold tracking-[-0.125em] text-4xl text-black cursor-pointer"><span><BaggageClaim size={40}></BaggageClaim></span>merch</p>
          <div className="flex items-center">
            <ul className="flex gap-6">
              <li>
                <a className="font-inter text-lg font-[500] text-black tracking-tight cursor-pointer py-2 px-4 rounded-xl hover:bg-[#edebe6] transition-all ease-in-out">Inicio</a>
              </li>
              <li>
                <a className="font-inter text-lg font-[500] text-black tracking-tight cursor-pointer py-2 px-4 rounded-xl hover:bg-[#edebe6] transition-all ease-in-out">Productos</a>
              </li>
              <li>
                <a className="font-inter text-lg font-[500] text-black tracking-tight mr-6 cursor-pointer py-2 px-4 rounded-xl hover:bg-[#edebe6] transition-all ease-in-out">Contacto </a>
              </li>
            </ul>
            <div className="text-[#acacac] text-[12px]">|</div>
            <span className="bg-[#edebe6] py-2 px-5 rounded-3xl font-sans font-[500] text-black ml-6 cursor-pointer"><ShoppingBag size={24}></ShoppingBag></span>
          </div>
        </div>
      </header>
      <main className="flex flex-col items-center gap-10 bg-[#f5f3ed] pt-10">
        <h1 className="font-inter font-[600] text-center text-[60px] tracking-tighter text-nowrap">Productos personalizados <br />que impulsan tu negocio.</h1>
        <p className="font-inter tracking-tight text-center font-[500] text-[20px] text-nowrap">Acerca tu marca a tus clientes y empleados <br /> de la manera mas facil y rapida.</p>
        <div className="relative h-96 w-1/2 flex items-center justify-center">
          <img className="absolute top-8 left-0 size-60 rounded-2xl rotate-1 shadow-2xl hover:rotate-2 cursor-grab transition-discrete" src="src/assets/producto-1.jpg" alt="Primer producto." />
          <img className="absolute top-8 left-50 size-60 rounded-2xl -rotate-2 shadow-2xl hover:-rotate-4 cursor-grab transition-discrete" src="src/assets/producto-2.jpg" alt="Segundo producto." />
          <img className="absolute top-8 left-100 size-60 rounded-2xl rotate-6 shadow-2xl hover:rotate-12 cursor-grab transition-discrete" src="src/assets/producto-3.jpg" alt="Tercer producto." />
          <img className="absolute top-8 left-150 size-60 rounded-2xl -rotate-3 shadow-2xl hover:-rotate-6 cursor-grab transition-discrete" src="src/assets/producto-4.jpg" alt="Cuarto producto." />
          <img className="absolute top-8 left-200 size-60 rounded-2xl rotate-1 shadow-2xl hover:rotate-2 cursor-grab transition-discrete" src="src/assets/producto-5.jpg" alt="Quinto producto." />
        </div>
      </main>
      <footer className="flex justify-around items-center p-10">
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
      </footer>
    </>
  )
}

export default App
