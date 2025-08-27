"use client";
import { useState } from 'react';


export default function ProductDetails() {
    const [quantity, setQuantity] = useState(1);
    
    const product = {
        id: '1',
        name: 'NovoTech EVM',
        price: 1999.00,
        description: 'The next generation of electronic voting machines powered by blockchain technology. Built with advanced security features and designed for seamless election management.',
        image: 'evmimage.png',
        features: [
            'Blockchain-powered EVM using Ethereum',
            'Ganache for blockchain development & testing',
            'Centralized server for blockchain vote storage',
            'ESP-32 based Smart EVM with unique ID',
            'Web portal for voter login & analytics',
            'Dual EVM Models: Blockchain & Non-Blockchain',
            'Firebase database integration for non-blockchain EVM',
            'Secure, transparent, and tamper-resistant design'
        ],
        specifications: {
            'Dimensions': '30cm x 25cm x 15cm',
            'Weight': '2.5 kg',
            'Power Source': 'AC 100-240V, 50/60Hz',
            'Battery Life': '8 hours (backup)',
            'Connectivity': 'WiFi, Bluetooth, Ethernet',
            'Operating Temperature': '0°C to 50°C',
            'Storage Temperature': '-20°C to 70°C',
            'Warranty': '2 years standard warranty'
        },
        inStock: true
    };

    const handleQuantityChange = (e) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value) && value > 0) {
            setQuantity(value);
        }
    };

    const handleBuyNow = () => {
        // In a real app, this would navigate to a checkout page
        alert(`Added ${quantity} ${product.name}(s) to cart. Proceeding to checkout...`);
        // navigate('/checkout');
    };

    

    return (
        <div className="bg-[#0f172a] min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <button 
                    className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                    Back
                </button>

                <div className="rounded-lg shadow-lg overflow-hidden">
                    <div className="md:flex">
                        {/* Product Image */}
                        <div className="md:w-1/2 p-8 flex rounded-2xl items-center justify-center ">
                            <img 
                                src={product.image} 
                                alt={product.name}
                                className="max-h-[500px] object-contain rounded-3xl"
                            />
                        </div>

                        {/* Product Details */}
                        <div className="md:w-1/2 p-8">
                            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                            <p className="text-gray-600 mb-6">{product.description}</p>
                            
                            <div className="mb-6">
                                <span className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                                <span className="ml-4 px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                                </span>
                            </div>

                            <div className="mb-8">
                                <h2 className="text-xl font-semibold mb-4">Key Features</h2>
                                <ul className="space-y-2">
                                    {product.features.map((feature, index) => (
                                        <li key={index} className="flex items-start">
                                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mb-8">
                                <h2 className="text-xl font-semibold mb-4">Specifications</h2>
                                <div className="grid grid-cols-2 gap-3">
                                    {Object.entries(product.specifications).map(([key, value]) => (
                                        <div key={key} className="border-b pb-2">
                                            <span className="text-gray-600">{key}:</span>
                                            <span className="font-medium ml-2">{value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center mb-6">
                                <span className="mr-4">Quantity:</span>
                                <input 
                                    type="number" 
                                    min="1" 
                                    value={quantity} 
                                    onChange={handleQuantityChange}
                                    className="w-20 px-3 py-2 border border-gray-300 rounded-md text-center"
                                />
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button 
                                    onClick={handleBuyNow}
                                    disabled={!product.inStock}
                                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                                        product.inStock 
                                        ? 'bg-blue-500 hover:bg-blue-600 transform hover:scale-105' 
                                        : 'bg-gray-400 cursor-not-allowed'
                                    }`}
                                >
                                    Buy Now
                                </button>
                                <button 
                                    onClick={() => {
                                        const link = document.createElement('a');
                                        link.href = 'User-Manual.pdf';
                                        link.download = 'user-manual.pdf';
                                        document.body.appendChild(link);
                                        link.click();
                                        document.body.removeChild(link);
                                    }}
                                    className="border border-gray-500 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300 font-medium"
                                >
                                    Download User Manual
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
