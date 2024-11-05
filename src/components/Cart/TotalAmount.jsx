import React from 'react';

const TotalAmount = () => {
    const subtotal = 450000; // Example subtotal value
    const shipping = 20000; // Example shipping cost
    const total = subtotal + shipping;

    return (
        <div className="space-y-4">
            <h2 className="text-xl font-semibold">Thông tin đơn hàng</h2>
            <div className="flex justify-between text-gray-600">
                <span>Tạm tính:</span>
                <span>{subtotal.toLocaleString()} VND</span>
            </div>
            <div className="flex justify-between text-gray-600">
                <span>Phí vận chuyển:</span>
                <span>{shipping.toLocaleString()} VND</span>
            </div>
            <hr className="border-t border-gray-300 my-2" />
            <div className="flex justify-between font-bold text-lg">
                <span>Tổng cộng:</span>
                <span>{total.toLocaleString()} VND</span>
            </div>
            <button className="w-full py-2 mt-4 bg-green-500 text-white rounded hover:bg-green-600">
                Thanh toán
            </button>
        </div>
    );
};

export default TotalAmount;
