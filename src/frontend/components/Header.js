import React from 'react';

const Header = () => (
    <header className="bg-gray-800 bg-opacity-70 rounded-full shadow-lg py-2 mx-4 mt-8">
        <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold text-white">Autos</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li><a href="#Home" className="text-white hover:underline">Home</a></li>
                    <li><a href="#Automobiles" className="text-white hover:underline">Automobiles</a></li>
                    <li><a href="#Cart" className="text-white hover:underline">Cart</a></li>
                    <li><a href="#Contact" className="text-white hover:underline">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
)

export default Header;