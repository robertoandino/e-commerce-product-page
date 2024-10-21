import React from 'react';

const Footer = () => (
    <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto text-center">
            <p>© 2024 My Store. All rights reserved.</p>
            <div className="flex justify-center space-x-4">
                <a href="#" className="hover:underline">Facebook</a>
                <a href="#" className="hover:underline">Twitter</a>
                <a href="#" className="hover:underline">Instagram</a>
            </div>
        </div>
    </footer>
);

export default Footer;