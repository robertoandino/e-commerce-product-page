import React, { useState } from 'react';
import img1 from '../../images/jonny-gios-X7UFvBn0vZc-unsplash.jpg'
import img2 from '../../images/jonny-gios-xo0KQrjYkuU-unsplash.jpg'
import img3 from '../../images/jonny-gios-zDo2oePRJrM-unsplash.jpg'
import img4 from '../../images/karsten-winegeart-v7aIztpSjxw-unsplash.jpg'

const Automobiles = () => {

    const [selectedImage, setSelectedImage] = useState(
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
    );

    const images = [ img1, img2, img3, img4];

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 p-4">
                    <img
                        className="w-full h-auto object-cover rounded-lg"
                        src={selectedImage}
                        alt="Product"
                    />
                    <div className="flex mt-2 space-x-2">
                        {images.map((image, index) => (
                            <img
                                key={index}
                                className="w-16 h-16 object-cover cursor-pointer border-2 border-transparent hover:border-gray-300 rounded-lg"
                                src={image}
                                alt={`Thumbnail ${index + 1}`}
                                onClick={() => setSelectedImage(image)}
                            />
                        ))}
                    </div>
                </div>
            
                <div className="w-full md:w-1/2 p-4">
                    <h1 className="text-3xl font-bold mb-4">Product Name</h1>
                    <p className="text-xl text-gray-600 mb-4">$99.99</p>
                    <p className="mb-4">
                        Description of the product.
                    </p>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Automobiles;