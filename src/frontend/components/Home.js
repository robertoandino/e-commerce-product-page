import React, { useState, useEffect, useCallback} from 'react';
import { useLocation } from 'react-router-dom';
import img1 from '../../images/nick-karvounis-OUJznLLS4-4-unsplash.jpg'
import img2 from '../../images/hyunwon-jang-WpF7JpiKpTk-unsplash.jpg'
import img3 from '../../images/milivoj-kuhar-ZZpn4xJHFHI-unsplash.jpg'
import img4 from '../../images/jacob-spence--lxokV5E0tc-unsplash.jpg'

const quotes = [
    "Embrace the Art of Timeless Elegance",
    "Unveil a curated selection of rare vintage automobiles.",
    "Where classic craftsmanship meets modern luxury.",
    "Experience the allure of classic cars."
];

const images = [img1, img2, img3, img4];

const Home = () => {
    const [currentQuote, setCurrentQuote] = useState(0);
    const location = useLocation();

    const preloadImages = useCallback((srcArray) => {
        srcArray.forEach((src) => {
            const img = new Image();
            img.src = src;
        })
    }, []);

    const handleScroll = useCallback(() => {
        const scrollY = window.scrollY;
        const newQuoteIndex = Math.floor(scrollY / window.innerHeight);

        if (newQuoteIndex !== currentQuote && newQuoteIndex < quotes.length) {
            setCurrentQuote(newQuoteIndex);
        }
    }, [currentQuote]); 

    const scrollToNextQuote = () => {
        if (currentQuote < quotes.length - 1) {
            window.scrollTo({
                top: window.innerHeight * (currentQuote + 1),
                behavior: 'smooth',
            });
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathName]);

    useEffect(() => {
        preloadImages(images);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll, preloadImages]);

    return (
        <div className="h-[400vh] bg-cover bg-center relative">
            {quotes.map((quote, index) => (
                <div
                    key={index}
                    className={`inset-0 flex items-center justify-center transition-all duration-500 
                        ${index === currentQuote ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                    style={{ height: '100vh' }} 
                >
                    <div className="bg-gray-800 bg-opacity-55 p-8 rounded-lg shadow-xl text-center">
                        <h1 className="text-5xl font-serif text-white mb-4">{quote}</h1>
                    </div>
                    <div className="flex items-center justify-center mt-8">
                        <img
                            src={images[index]}
                            alt={`For quote ${index + 1}`}
                            className="max-w-[500px] max-h-[30vh] w-auto h-auto object-cover rounded-lg"
                        />
                    </div>
                </div>
            ))}

            {(currentQuote === 0 || currentQuote === 1  || currentQuote === 2 ) && (
                <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 text-center">
                    <p className="text-white text-lg mb-2">Explore</p>
                    <div onClick={scrollToNextQuote} className="animate-bounce cursor-pointer">
                        <span className="text-white text-4xl">⇩</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;