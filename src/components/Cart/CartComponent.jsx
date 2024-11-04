import { AddCircleOutline, CloseOutlined, DeleteOutlineRounded, RemoveCircleOutline } from "@mui/icons-material";
import { useEffect, useState, Fragment } from "react";
import toast from "react-hot-toast";

const fakeCartData = [
    {
        id: 1,
        quantity: 2,
        productDetail: {
            product: {
                id: 101,
                name: "Sản phẩm 1",
                price: 100000,
            },
            color: { name: "Đỏ" },
            size: { name: "M" },
        },
    },
    {
        id: 2,
        quantity: 1,
        productDetail: {
            product: {
                id: 102,
                name: "Sản phẩm 2",
                price: 150000,
            },
            color: { name: "Xanh" },
            size: { name: "L" },
        },
    },
    {
        id: 3,
        quantity: 3,
        productDetail: {
            product: {
                id: 103,
                name: "Sản phẩm 3",
                price: 200000,
            },
            color: { name: "Trắng" },
            size: { name: "S" },
        },
    },
];

const CartComponent = () => {
    const [listCartDetail, setListCartDetail] = useState(fakeCartData);
    const [listSelectedId, setListSelectedId] = useState([]);
    const baseImage = "https://product.hstatic.net/200000690725/product/social_post_3_-_12.06-04_58b026e298c9484c8baa13a1ef538757_master.jpg";

    const handleDeleteCardDetail = (id) => {
        setListCartDetail(prev => prev.filter(cart => cart.id !== id));
        toast.success("Sản phẩm đã được xóa");
    };

    const handleAddQuantity = (id) => {
        setListCartDetail(prev => prev.map(cart => cart.id === id ? { ...cart, quantity: cart.quantity + 1 } : cart));
        toast.success("Đã tăng số lượng sản phẩm");
    };

    const handleMinusQuantity = (id) => {
        setListCartDetail(prev => prev.map(cart => (cart.id === id && cart.quantity > 1) ? { ...cart, quantity: cart.quantity - 1 } : cart));
        toast.success("Đã giảm số lượng sản phẩm");
    };

    const handleSelectCartDetail = (event, id) => {
        const { checked } = event.target;
        setListSelectedId(prev => checked ? [...prev, id] : prev.filter(selectedId => selectedId !== id));
    };

    const handleCheckout = () => {
        if (listSelectedId.length === 0) {
            toast("Vui lòng chọn sản phẩm");
        } else {
            toast.success("Đặt hàng thành công!");
            // Xử lý đặt hàng ở đây
        }
    };

    return (
        <Fragment>
            <div className="fixed h-full top-0 right-0 bg-white shadow-md transition-transform duration-500">
                <div className="flex flex-col h-full">
                    <div className="flex justify-between p-4">
                        <h2 className="text-xl font-semibold">Giỏ hàng</h2>
                        <button onClick={() => { /* Logic để đóng giỏ hàng */ }}><CloseOutlined /></button>
                    </div>
                    <div className="flex-1 overflow-y-auto p-4">
                        {listCartDetail.map(cart => (
                            <div key={cart.id} className="flex justify-between items-center border-b py-2">
                                <div className="flex items-center">
                                    <input type="checkbox" checked={listSelectedId.includes(cart.id)} onChange={(event) => handleSelectCartDetail(event, cart.id)} />
                                    <img src={baseImage} alt={cart.productDetail.product.name} className="w-16 h-16 object-cover mx-2" />
                                    <div>
                                        <div className="font-medium">{cart.productDetail.product.name}</div>
                                        <div className="text-gray-500">{cart.productDetail.color.name} / {cart.productDetail.size.name}</div>
                                        <div className="flex items-center">
                                            <button onClick={() => handleAddQuantity(cart.id)}><AddCircleOutline /></button>
                                            <span className="mx-2">{cart.quantity}</span>
                                            <button onClick={() => handleMinusQuantity(cart.id)}><RemoveCircleOutline /></button>
                                            <button onClick={() => handleDeleteCardDetail(cart.id)}><DeleteOutlineRounded /></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="font-semibold text-red-600">{(cart.productDetail.product.price * cart.quantity).toLocaleString("vi-VN")}₫</div>
                            </div>
                        ))}
                    </div>
                    <div className="p-4">
                        <div className="flex justify-between">
                            <span>Tổng tiền:</span>
                            <span className="font-semibold text-red-600">
                                {listCartDetail.reduce((total, cart) => total + cart.quantity * cart.productDetail.product.price, 0).toLocaleString("vi-VN")}₫
                            </span>
                        </div>
                        <button onClick={handleCheckout} className="bg-black text-white py-2 w-full mt-4">Thanh toán</button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default CartComponent;
