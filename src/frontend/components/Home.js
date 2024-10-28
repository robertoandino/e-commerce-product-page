import React, { useState, useEffect, useCallback } from 'react';

const quotes = [
    "Embrace the Art of Timeless Elegance",
    "Unveil a curated selection of rare vintage automobiles.",
    "Where classic craftsmanship meets modern luxury.",
    "Experience the allure of classic cars."
];

const Home = () => {
    const [currentQuote, setCurrentQuote] = useState(0);

    const handleScroll = useCallback(() => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;

        const newQuoteIndex = Math.floor(scrollY / windowHeight);
        if (newQuoteIndex !== currentQuote && newQuoteIndex < quotes.length) {
            setCurrentQuote(newQuoteIndex);
        }
    }, [currentQuote]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return (
        <div className="h-[400vh] bg-cover bg-center relative">
            {quotes.map((quote, index) => (
                <div
                    key={index}
                    className={`inset-0 flex items-center justify-center transition-opacity duration-500 ${index === currentQuote ? 'opacity-100' : 'opacity-0'}`}
                    style={{ height: '100vh' }} 
                >
                    <div className="bg-gray-800 bg-opacity-80 p-8 rounded-lg shadow-xl text-center">
                        <h1 className="text-6xl font-serif text-white mb-4">{quote}</h1>
                    </div>
                </div>
            ))}

            {currentQuote === 0 && (
                <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 text-center">
                    <p className="text-white text-lg mb-2">Explore</p>
                    <div className="animate-bounce">
                        <span className="text-white text-4xl">⇩</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;