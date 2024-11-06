import React from 'react';

const Contact = () => (
    <div className="flex flex-col items-center justify-center min-h-screen text-white font-serif p-8">
        <div className="max-w-2xl w-full text-center bg-gray-800 bg-opacity-75 p-8 rounded-lg shadow-lg">
            <h2 className="text-4xl mb-6">Get in Touch</h2>
            <p className="text-lg mb-8">We'd love to hear from you. Whether you're interested in our selection of vintage cars or have questions, feel free to reach out.</p>

            <div className="text-left mb-6">
                <h3 className="text-2xl mb-2">Contact Information</h3>
                <p className="mb-2">📍 Location: 123 Vintage Ave, Classic City, CA 90210</p>
                <p className="mb-2">📞 Phone: (555) 123-4567</p>
                <p>📧 Email: andinoRobert518@yahoo.com</p>
            </div>

            <div className="text-left mb-6">
                <h3 className="text-2xl mb-4">Follow Us</h3>
                <div className="flex space-x-4 justify-center">
                    <a href="https://facebook.com" className="text-gray-400 hover:text-white">Facebook</a>
                    <a href="https://instagram.com" className="text-gray-400 hover:text-white">Instagram</a>
                    <a href="https://twitter.com" className="text-gray-400 hover:text-white">Twitter</a>
                </div>
            </div>
        </div>
    </div>
)

export default Contact;