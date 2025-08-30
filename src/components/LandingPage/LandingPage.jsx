import { useState, useEffect } from "react";
import Carousel from "./Carousel";
import { ChevronsDown } from "lucide-react";
import { Link, Element } from "react-scroll";

const LandingPage = () => {
    const [showLink, setShowLink] = useState(true);
    const handleClick = (e) => {
        setShowLink(false); // hide the link after clicking
    };

    useEffect(() => {
        const handleScroll = () => {
            const eventsSection = document.getElementById("events");
            if (!eventsSection) return;

            const rect = eventsSection.getBoundingClientRect();

            // If top of #events is inside viewport, hide the link
            if (rect.top <= (window.innerHeight)) {
                setShowLink(false);
            } else {
                setShowLink(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div className="bg-beige flex flex-col justify-center items-center pt-10">
            <h1 className="text-airbnb font-inter font-semibold text-center text-3xl tracking-tighter text-nowrap mb-1">Impulsa tu marca <br /> con productos personalizados</h1>
            <p className="text-airbnb font-inter tracking-tight text-center font-medium text-md text-nowrap mb-30">Regalos empresariales que generan conexión <br />y recuerdan tu marca</p>
            <Carousel />
            {showLink && (
                <Link
                    to="events"
                    smooth={true}
                    duration={1000}
                    onClick={handleClick}
                    className="fixed bottom-10 flex flex-col items-center text-airbnb font-inter font-semibold text-2xl tracking-tighterx cursor-pointer animate-bounce"
                >
                    <ChevronsDown />
                    Proximos Eventos
                </Link>
            )}
            <Element id="events" name="events" className="h-80 w-full bg-airbnb rounded-4xl shadow-2xl p-20">a</Element>
        </div>
    )
}

export default LandingPage
