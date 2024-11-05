import React, { Fragment } from 'react';
import ProductList from './ProductList';
import TotalAmount from './TotalAmount';

function CartComponent() {
    return (
        <Fragment>
            <div className="flex flex-col items-center px-4 py-10 mx-20 space-y-8">
                {/* Header Section */}
                <div className="flex justify-between w-full font-bold">
                    <h1 className="text-2xl">Giỏ hàng của bạn</h1>
                    <p className="text-gray-500">Bạn đang có : X sản phẩm trong giỏ hàng</p>
                </div>
                <hr className="border-green-300 border-t-2 my-4" />

                <div className="flex w-full space-x-4">
                    {/* Product List Section (Left) */}
                    <div className="flex-grow border p-4 rounded-lg" style={{ flexBasis: '70%' }}>
                        <ProductList />
                    </div>

                    {/* Total Amount Section (Right) */}
                    <div className="flex-grow border p-4 rounded-lg bg-gray-50" style={{ flexBasis: '30%' }}>
                        <TotalAmount />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default CartComponent;
