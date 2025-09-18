import { X, BaggageClaim, Mail, Phone, MapPin, Menu } from "lucide-react"
import { NavLink, Outlet, useLocation } from "react-router"
import NavItem from "../NavItem/NavItem"
import { useState, useEffect, useRef } from "react"

const App = () => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(false);
  const headerRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setOpenMenu(false);
      }
    };

    if (openMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openMenu]);

  const handleNavClick = () => {
    setOpenMenu(false);
  };
  const currentYear = new Date().getFullYear();

  return (
    <>
      <header ref={headerRef} className="w-full bg-beige">
        <div className="flex items-center p-3 sm:p-4 lg:p-6 justify-between border-b-2 border-airbnb shadow-md">
          {/* Logo Section */}
          <div id="logotype" className="flex items-center min-w-0 flex-1">
            <BaggageClaim className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 text-airbnb flex-shrink-0" />
            <p className="text-airbnb text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-inter font-bold tracking-tighter cursor-pointer ml-1 sm:ml-1 truncate pb-1">
              merch
            </p>
          </div>

          {/* Menu Button */}
          <div className="flex items-center ml-4">
            <button
              onClick={() => setOpenMenu(!openMenu)}
              className="flex items-center justify-center p-2 rounded-lg transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {!openMenu ? (
                <Menu className="w-6 h-6 text-airbnb sm:w-7 sm:h-7  transition-colors duration-200" />
              ) : (
                <X className="w-6 h-6 sm:w-7 sm:h-7 text-airbnb transition-colors duration-200" />
              )}
            </button>
          </div>
        </div>

        {/* Collapsible Menu */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${openMenu
            ? "max-h-48 opacity-100 scale-y-100 shadow-lg"
            : "max-h-0 opacity-0 scale-y-0"
            }`}
        >
          <nav className="bg-beige">
            <div className="p-3 sm:p-4 lg:p-6 shadow-lg border-b-2 border-airbnb">
              <ul className="grid grid-cols-1 gap-2">
                <NavItem label="Inicio" path="/" onClick={handleNavClick} />
                <NavItem label="Catálogo" path="/catalogo" onClick={handleNavClick} />
                <NavItem label="Presupuesto" path="/presupuesto" onClick={handleNavClick} />
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <main className="bg-beige">
        <Outlet></Outlet>
      </main>
      <footer className="bg-gradient-to-br from-airbnb to-red-500 text-beige w-full">
        {/* Main Footer Content */}
        <div className="px-4 py-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

            {/* Brand Section */}
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-4">
                <BaggageClaim className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-beige flex-shrink-0" />
                <p className="text-beige text-xl sm:text-2xl md:text-3xl lg:text-4xl font-inter font-semibold tracking-tighter cursor-pointer ml-1 sm:ml-2">
                  merch
                </p>
              </div>
              <p className="text-beige text-sm sm:text-base opacity-90 mb-4 leading-relaxed">
                Tu tienda de merchandising personalizado. Calidad premium para tus productos únicos.
              </p>
            </div>

            {/* Navigation */}

            {/* Contact Info */}
            <div className="col-span-1">
              <h3 className="text-beige font-inter font-semibold text-base sm:text-lg mb-4">
                Contacto
              </h3>
              <div className="flex flex-col space-y-3">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-beige flex-shrink-0" />
                  <span className="text-beige text-sm sm:text-base">info@merch.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-beige flex-shrink-0" />
                  <span className="text-beige text-sm sm:text-base">+54 341 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-beige flex-shrink-0" />
                  <span className="text-beige text-sm sm:text-base">Rosario, Santa Fe</span>
                </div>
              </div>
            </div>

            {/* Legal & Info */}
            <div className="col-span-1">
              <h3 className="text-beige font-inter font-semibold text-base sm:text-lg mb-4">
                Información Legal
              </h3>
              <div className="flex flex-col space-y-2">
                <a href="#" className="text-beige hover:text-white transition-colors duration-200 text-sm sm:text-base underline underline-offset-2">
                  Términos y Condiciones
                </a>
                <a href="#" className="text-beige hover:text-white transition-colors duration-200 text-sm sm:text-base underline underline-offset-2">
                  Política de Privacidad
                </a>
                <a href="#" className="text-beige hover:text-white transition-colors duration-200 text-sm sm:text-base underline underline-offset-2">
                  Política de Devoluciones
                </a>
                <a href="#" className="text-beige hover:text-white transition-colors duration-200 text-sm sm:text-base underline underline-offset-2">
                  Preguntas Frecuentes
                </a>
              </div>
            </div>
            <div className="col-span-1">
              <h3 className="text-beige font-inter font-semibold text-base sm:text-lg mb-4">
                Navegación
              </h3>
              <div className="flex flex-col space-y-2">
                {location.pathname !== '/' && (
                  <NavLink
                    to="/"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Inicio
                  </NavLink>
                )}
                {location.pathname !== '/catalogo' && (
                  <NavLink
                    to="/catalogo"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Catálogo
                  </NavLink>
                )}
                {location.pathname !== '/presupuesto' && (
                  <NavLink
                    to="/presupuesto"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Presupuesto
                  </NavLink>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-beige border-opacity-20 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-beige text-xs sm:text-sm opacity-80 text-center sm:text-left">
              © {currentYear} Merch. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
