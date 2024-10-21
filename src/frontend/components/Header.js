import React from 'react';

const Header = () => (
    <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between">
            <h1 className="text-xl font-bold">My Store</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li><a href="#" className="hover:underline">Home</a></li>
                    <li><a href="#" className="hover:underline">Products</a></li>
                    <li><a href="#" className="hover:underline">About</a></li>
                    <li><a href="#" className="hover:underline">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
)

export default Header;