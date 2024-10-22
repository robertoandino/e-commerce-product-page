import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
    <footer className="bg-gray-800 bg-opacity-70 rounded-full shadow-lg py-2 mx-4 mb-4">
        <div className="container mx-auto flex justify-between items-center font-serif">
            <p className="text-white text-sm">© 2024 Automobiles. All rights reserved.</p>
            <nav>
                <ul className="flex space-x-4">
                    <li><Link  to="Privacy" className="text-white hover:underline">Privacy Policy</Link></li>
                    <li><Link to="Terms" className="text-white hover:underline">Terms of Service</Link></li>
                </ul>
            </nav>
        </div>
    </footer>
);

export default Footer;