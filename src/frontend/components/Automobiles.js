import React, { useState, useEffect, useMemo } from 'react';
//import { FaChevronRight } from 'react-icons/fa';
import img1 from '../../images/jonny-gios-X7UFvBn0vZc-unsplash.jpg'
import img2 from '../../images/jonny-gios-xo0KQrjYkuU-unsplash.jpg'
import img3 from '../../images/jonny-gios-zDo2oePRJrM-unsplash.jpg'
import img4 from '../../images/karsten-winegeart-v7aIztpSjxw-unsplash.jpg'

const Automobiles = () => {

    const images = useMemo(() => [img1, img2, img3, img4], []);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isSliding, setIsSliding] = useState(false);

    const handleNext = () => {
        if (isSliding) return;
        setIsSliding(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            setIsSliding(false);
        }, 500);
    };

    useEffect(() => {
        images.forEach((image) => {
            const img = new Image();
            img.src = image;
        });
    }, [images]);

    return (
        <div className="container mx-auto p-8 mt-40 max-w-3xl bg-gray-900 
            bg-opacity-50 rounded-2xl shadow-lg text-white transition-all duration-500 ease-in-out">
            <div className="flex flex-col md:flex-row items-center relative overflow-hidden">
                <div className="w-full md:w-1/2 p-4 relative overflow-hidden">
                    <div
                        className={`w-full h-full transition-transform duration-700 ease-in-out transform ${
                            isSliding ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100"
                        }`}
                    >
                        <img
                            className="w-full h-auto object-cover rounded-xl shadow-lg transition-all duration-700"
                            src={images[currentIndex]}
                            alt="Classic Car"
                        />
                    </div>

                    <button
                        onClick={handleNext}
                        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-yellow-600
                        hover:bg-yellow-700 text-black font-bold py-2 px-3 rounded-full shadow-lg 
                        transition-all duration-500"
                    >
                        ➔
                    </button>

                    <div className="flex mt-4 space-x-2 justify-center">
                        {images.map((image, index) => (
                            <img
                                key={index}
                                className={`w-20 h-20 object-cover cursor-pointer border-2 
                                    border-transparent hover:border-blue-500 rounded-lg
                                    transition-all duration-300 transform hover:scale-10 ${
                                        currentIndex === index ? "border-yellow-500 shadow-lg" : ""
                                    }`}
                                src={image}
                                alt={`Thumbnail ${index + 1}`}
                                onClick={() => setCurrentIndex(index)}
                            />
                        ))}
                    </div>
                </div>
            
                <div className="w-full md:w-1/2 p-6 text-center md:text-left">
                    <h1 className="text-4xl font-serif font-semibold mb-4 text-yellow-300">
                        Classic Car
                    </h1>
                    <p className="text-2xl text-yellow-400 mb-4">$99,999</p>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                        This classic vehicle is a timeless masterpiece, 
                        offering both beauty and craftsmanship.
                    </p>
                    <button className="bg-blue-500 hover:bg-yellow-600 text-black 
                        font-bold py-3 px-6 rounded-full transition-all duration-300
                        shadow-lg hover:scale-105">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Automobiles;