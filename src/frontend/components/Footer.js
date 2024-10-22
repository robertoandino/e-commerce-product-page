import React from 'react';

const Footer = () => (
    <footer className="bg-gray-800 bg-opacity-70 rounded-full shadow-lg py-2 mx-4 mb-4">
        <div className="container mx-auto flex justify-between items-center">
            <p className="text-white text-sm">© 2024 My Store. All rights reserved.</p>
            <nav>
                <ul className="flex space-x-4">
                    <li><a href="Privacy" className="text-white hover:underline">Privacy Policy</a></li>
                    <li><a href="Terms" className="text-white hover:underline">Terms of Service</a></li>
                </ul>
            </nav>
        </div>
    </footer>
);

export default Footer;