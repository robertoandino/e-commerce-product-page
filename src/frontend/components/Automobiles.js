import React, { useMemo } from 'react';
import img1 from '../../images/aleksey-malinovski-ORdigtC0JPM-unsplash.jpg'
import img2 from '../../images/dominik-lange-AavxWqRBG5M-unsplash.jpg'
import img3 from '../../images/felix-itb1TbV5H7w-unsplash.jpg'
import img4 from '../../images/robin-vet-q6LFMQ6wVZ0-unsplash.jpg'

const Automobiles = () => {

    const images = useMemo(() => [img1, img2, img3, img4], []);
    const descriptions = [
        { title: "Classic Car Model A", price: "$120,000", info: "This classic model is known for its elegance and craftsmanship." },
        { title: "Vintage Coupe B", price: "$85,000", info: "A vintage masterpiece with timeless appeal and a powerful engine." },
        { title: "Vintage VW Beetle", price: "$150,000", info: "This beetle combines charm with incredible speed." },
        { title: "Retro Convertible D", price: "$95,000", info: "A convertible with classic aesthetics and luxury." }
    ];

    return (
        <div className="container mx-auto p-8 mt-40 max-w-3xl bg-gray-900 bg-opacity-60 rounded-2xl shadow-xl text-gray-200">
            {images.map((image, index) => (
                <div key={index} className="flex flex-col items-center mb-16 transition-tranform duration-500 ease-in-out">
                    <h2 className="text-3xl font-serif text-gray-300 mb-4">{descriptions[index].title}</h2>
                    <p className="text-lg text-gray-400 mb-2">{descriptions[index].info}</p>
                    <p className="text-gray-300 text-center mb-6 max-w-xl">{descriptions[index].info}</p>
                    <img
                        className="w-full h-auto object-cover rounded-lg shadow-md border-gray-500"
                        src={image}
                        alt={`Classic Car ${index + 1}`}
                    />
                </div>
            ))}
            <div className="text-center mt-10 border-t border-gray-700 pt-6">
                <h3 className="text-2xl mb-4 text-gray-300">Interested? Contact Us</h3>
                <p className="text-lg text-gray-400">📞 (555) 123-4567 | 📧 andinorobert518@yahoo.com</p>
            </div>
        </div>
    );
};

export default Automobiles;