import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header className="fixed top-0 left-0 right-0 max-w-5xl px-8 mt-10 bg-gray-800 bg-opacity-70 rounded-full shadow-lg py-2 z-50 ml-28">
        <div className="container max-w-4xl mx-auto flex justify-between items-center font-serif">
            <h1 className="text-xl text-white">Autos</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/" className="text-white hover:underline">Home</Link>
                    </li>
                    <li>
                        <Link to="/automobiles" className="text-white hover:underline">Automobiles</Link>
                    </li>
                    <li>
                        <Link to="/cart" className="text-white hover:underline">Cart</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="text-white hover:underline">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
)

export default Header;