import React from 'react';

const ProductPage = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 p-4">
                    <img
                        className="w-full h-auto object-cover rounded-lg"
                        src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
                        alt="Product"
                    />
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

export default ProductPage;