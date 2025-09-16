import { useState, useEffect } from "react";
import Carousel from "./Carousel";
import { ChevronsDown } from "lucide-react";
import { Link, Element } from "react-scroll";

const LandingPage = () => {

    return (
        <div className="bg-beige flex flex-col justify-center items-center pt-10">
            <div className="w-full px-1">
                <h1 className="text-airbnb font-inter font-semibold text-center text-2xl tracking-tighter mb-1">Impulsa tu marca <br /> con productos personalizados</h1>
                <p className="text-airbnb font-inter tracking-tight text-center font-medium text-md mb-30">Regalos empresariales que generan conexión <br />y recuerdan tu marca</p>
            </div>
            <Carousel />
            <Link
                to="events"
                smooth={true}
                duration={1000}
                className="flex flex-col items-center text-airbnb font-inter font-semibold text-2xl tracking-tighterx cursor-pointer animate-bounce mb-12"
            >
                <ChevronsDown />
                Proximos Eventos
            </Link>
            <div id="events" name="events" className="w-full bg-airbnb p-2 mb-4">
                <p className="text-beige font-inter font-bold text-start text-3xl tracking-tighter text-nowrap">n501 Medellin </p>
            </div>
            <Element className="flex justify-center items-center mb-10">
                <div className="px-4">
                    <div className="flex flex-col justify-center items-center">
                        <img src="https://tse4.mm.bing.net/th/id/OIP.eC0eGJW5XN6lk3h1p9W7HwAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="networking image" className="w-full rounded-t-2xl z-0" />
                        <div className="bg-beige shadow-2xl w-full h-30 rounded-b-2xl z-10 p-4">
                            <h2 className="text-airbnb font-inter font-semibold text-2xl tracking-tighter text-nowrap mb-2">Networking Empresarial</h2>
                            <p className="font-inter text-gray-500">10/10/2025</p>
                        </div>
                    </div>
                </div>
            </Element>
        </div>
    )
}

export default LandingPage
