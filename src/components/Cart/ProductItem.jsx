import React, { useState } from 'react';

const ProductItem = ({ product, onUpdateQuantity, onRemove }) => {
    const [quantity, setQuantity] = useState(product.quantity);

    const handleIncrease = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
        onUpdateQuantity(product.id, quantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
            onUpdateQuantity(product.id, quantity - 1);
        }
    };

    const handleRemove = () => {
        onRemove(product.id);
    };

    return (
        <div className="flex items-center justify-between p-4 border-b border-gray-200 rounded-lg shadow-sm bg-white">
            <div className="flex items-center space-x-4">
                {/* Image container with delete button */}
                <div className="relative w-20 h-20">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover rounded-lg"
                    />
                    <button
                        onClick={handleRemove}
                        className="absolute top-0 left-0 text-sm transform -translate-x-2 -translate-y-3 bg-red-500 text-white rounded-full p-0.5 hover:bg-red-600 transition duration-200 ease-in-out shadow-md"
                        style={{ padding: '0.25rem' }}
                    >
                        xoá
                    </button>
                </div>

                {/* Product Info */}
                <div>
                    <h2 className="text-lg font-semibold">{product.name}</h2>
                    <p className="text-gray-600">{product.price.toLocaleString()} VND</p>
                </div>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center space-x-3">
                <button 
                    onClick={handleDecrease} 
                    className="px-3 py-1 bg-gray-100 border rounded hover:bg-gray-200"
                >
                    -
                </button>
                <span className="font-medium">{quantity}</span>
                <button 
                    onClick={handleIncrease} 
                    className="px-3 py-1 bg-gray-100 border rounded hover:bg-gray-200"
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default ProductItem;
