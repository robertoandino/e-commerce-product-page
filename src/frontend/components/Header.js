import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header className="bg-gray-800 bg-opacity-70 rounded-full shadow-lg py-2 mx-4 mt-8">
        <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold text-white">Autos</h1>
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