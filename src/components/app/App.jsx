import { BaggageClaim, Info, Phone, ShoppingBag } from "lucide-react"

const App = () => {

  return (
    <div className="bg-linear-to-b from-[#f5f3ed] to-white">
      <header className="flex justify-around items-center p-10 rounded-b-xl">
        <div className="flex w-[1400px] justify-between items-top">
          <p className="flex gap-4 items-center font-(font-family: 'Inter Variable', sans-serif) font-extrabold text-3xl text-black cursor-pointer"><span><BaggageClaim size={40}></BaggageClaim></span>MERCH</p>
          <div className="flex items-center">
            <ul className="flex gap-6">
              <li>
                <a className="font-(font-family: 'Inter Variable', sans-serif) text-lg font-[500] text-black tracking-tight cursor-pointer py-2 px-4 rounded-xl hover:bg-[#edebe6]/75 transition-all ease-in-out">Home</a>
              </li>
              <li>
                <a className="font-(font-family: 'Inter Variable', sans-serif) text-lg font-[500] text-black tracking-tight cursor-pointer py-2 px-4 rounded-xl hover:bg-[#edebe6]/75 transition-all ease-in-out">Products</a>
              </li>
              <li>
                <a className="font-(font-family: 'Inter Variable', sans-serif) text-lg font-[500] text-black tracking-tight mr-6 cursor-pointer py-2 px-4 rounded-xl hover:bg-[#edebe6]/75 transition-all ease-in-out">Contact</a>
              </li>
            </ul>
            <div className="text-[#d2d2d2] text-xs">|</div>
            <span className="bg-[#edebe6]/75 py-2 px-5 rounded-3xl font-sans font-[500] text-black ml-6 cursor-pointer"><ShoppingBag size={24}></ShoppingBag></span>
          </div>
        </div>
      </header>
      <main className="min-h-screen flex justify-center text-5xl">
        CONTENT
      </main>
      <footer className="flex px-40 py-10 justify-center">
        <div className="w-screen rounded-[40px] p-[120px] bg-black">
          <div className="flex justify-between">
            <div className="flex flex-col gap-y-24">
              <div className="flex flex-col">
                <p className="flex gap-4 items-center font-(font-family: 'Inter Variable', sans-serif) font-extrabold text-2xl text-white cursor-pointer"><span><BaggageClaim size={32}></BaggageClaim></span>MERCH</p>
                <p className="text-nowrap pl-12 font-(font-family: 'Inter Variable', sans-serif) font-extrabold text-lg text-white">Branded Merch,<br />Seamlessly Delivered.</p>
              </div>
              <button className="font-(font-family: 'Inter Variable', sans-serif) text-lg font-[500] text-black bg-white px-8 py-4 rounded-xl">
                Ask for Budget!
              </button>
            </div>
            <ul className="flex flex-col gap-y-6">
              <li className="font-(font-family: 'Inter Variable', sans-serif) text-lg font-[500] text-white">Products</li>
              <li className="font-(font-family: 'Inter Variable', sans-serif) text-lg font-[500] text-white">About us</li>
              <li className="font-(font-family: 'Inter Variable', sans-serif) text-lg font-[500] text-white">Copyright</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
