import Carousel from "./Carousel";
import { ChevronsDown, CalendarDays, MapPin, Users } from "lucide-react";
import { Link } from "react-scroll";

const LandingPage = () => {

    return (
        <div
            className="bg-beige flex flex-col justify-center items-center px-2 sm:px-4 md:px-8 w-full"
            style={{ minHeight: 'calc(100vh - 4rem)' }} // Adjust '4rem' to your header height
        >
            <div className="bg-beige flex flex-col justify-center items-center px-2 sm:px-4 md:px-8 w-full min-h-screen">
                <div className="w-full max-w-4xl mx-auto px-2 sm:px-6 lg:px-8 pb-6 sm:pb-12 lg:pb-6">
                    <h1 className="text-airbnb font-inter font-semibold text-center tracking-tighter mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight">
                        Impulsa tu marca <br className="hidden sm:block" />
                        <span className="sm:hidden"> </span>con productos personalizados
                    </h1>
                    <p className="text-airbnb font-inter tracking-tight text-center font-medium text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
                        Regalos empresariales que generan conexión <br className="block" />
                        <span className="sm:hidden"> </span>y recuerdan tu marca
                    </p>
                </div>
                <div className="w-full max-w-5xl px-2 sm:px-6">
                    <Carousel />
                </div>
                <Link
                    to="events"
                    smooth={true}
                    duration={1000}
                    className="flex flex-col items-center text-airbnb font-inter font-semibold text-lg sm:text-2xl tracking-tighterx cursor-pointer animate-bounce mb-8 sm:mb-12"
                >
                    <ChevronsDown size={32} />
                    Próximos Eventos
                </Link>
            </div>
            {/* Hero Event Section */}
            <section
                id="events"
                name="events"
                className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-airbnb to-red-500 p-6 sm:p-10 rounded-3xl shadow-2xl mb-10"
            >
                <div className="flex-1 flex flex-col justify-center items-start text-beige px-0 md:px-8 mb-8 md:mb-0">
                    <h2 className="font-inter font-extrabold text-3xl sm:text-4xl md:text-5xl mb-4 leading-tight">
                        Networking Empresarial Medellín
                    </h2>
                    <p className="font-inter text-lg sm:text-xl md:text-2xl mb-6 opacity-90">
                        ¡Conecta, inspira y haz crecer tu marca!
                    </p>
                    <ul className="mb-6 space-y-3">
                        <li className="flex items-center gap-2">
                            <CalendarDays size={22} />
                            <span className="font-semibold text-lg sm:text-xl">10/10/2025</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <MapPin size={22} />
                            <span className="font-semibold text-lg sm:text-xl">n501 Coworking, Medellín</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <Users size={22} />
                            <span className="font-semibold text-lg sm:text-xl">+100 empresarios</span>
                        </li>
                    </ul>
                    <p className="font-inter text-base sm:text-lg md:text-xl mb-8 opacity-90">
                        Vive una jornada exclusiva de networking, charlas inspiradoras y oportunidades de colaboración. Descubre cómo los regalos personalizados pueden potenciar tu marca y crear conexiones duraderas.
                    </p>
                    <a
                        rel="noopener noreferrer"
                        className="inline-block bg-beige text-airbnb font-inter font-bold px-8 py-3 rounded-xl shadow-lg hover:animate-pulse transition-all text-lg sm:text-xl"
                    >
                        ¡Reserva tu cupo!
                    </a>
                </div>
            </section>
        </div>
    )
}

export default LandingPage