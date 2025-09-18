import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-beige px-4">
      <h1 className="font-inter text-airbnb text-6xl font-bold mb-4 tracking-tight">404</h1>
      <p className="font-inter text-airbnb text-xl sm:text-2xl mb-6 text-center">
        Página no encontrada
      </p>
      <NavLink
        to="/"
        className="bg-airbnb text-beige font-inter font-semibold px-6 py-2 rounded-xl shadow hover:bg-red-500 transition-colors"
      >
        Volver al inicio
      </NavLink>
    </div>
  );
};

export default NotFound;
