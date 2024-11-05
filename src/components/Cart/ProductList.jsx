import React, { useState } from 'react';
import ProductItem from './ProductItem';

const ProductList = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Sản phẩm 1', price: 100000, quantity: 1, image: 'https://down-vn.img.susercontent.com/file/9dda1448805603bf7e6f72ed863999f8' },
        { id: 2, name: 'Sản phẩm 2', price: 150000, quantity: 2, image: 'https://down-vn.img.susercontent.com/file/9dda1448805603bf7e6f72ed863999f8' },
        { id: 3, name: 'Sản phẩm 3', price: 200000, quantity: 1, image: 'https://down-vn.img.susercontent.com/file/9dda1448805603bf7e6f72ed863999f8' }
    ]);

    const handleUpdateQuantity = (productId, newQuantity) => {
        setProducts(prevProducts =>
            prevProducts.map(product =>
                product.id === productId ? { ...product, quantity: newQuantity } : product
            )
        );
    };

    const handleRemoveProduct = (productId) => {
        setProducts(prevProducts => prevProducts.filter(product => product.id !== productId));
    };

    return (
        <div className="p-8">
           
            <div className="space-y-4">
                {products.map(product => (
                    <ProductItem
                        key={product.id}
                        product={product}
                        onUpdateQuantity={handleUpdateQuantity}
                        onRemove={handleRemoveProduct}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
