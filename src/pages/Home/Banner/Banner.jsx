import {useState , useEffect} from "react";
import slides from "./slides";

function Banner() {

    const [currentIndex , setCurrentIndex ] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex +1 ) % slides.length)
        } , 4000)
        return () => clearInterval (interval)
    } , [slides.length])

    return ( 
        <>
            <div className="relative w-full h-[100%] overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {slides.map((slide) => (
                    <div key={slide.id} className="w-full flex-shrink-0">
                        <img src={slide.src} alt={slide.alt} className="w-full h-full object-cover" />
                    </div>
                    ))}
                </div>
                </div>
        </>
     );
}

export default Banner;