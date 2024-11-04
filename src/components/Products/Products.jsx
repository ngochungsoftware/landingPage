import React from "react";
import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import { FaEye, FaShoppingCart } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Áo Adidas",
    price: "$50.00",
    oldPrice: "$62.50",
    discount: "20%",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women Nike",
    price: "$30.00",
    oldPrice: "$33.00",
    discount: "10%",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    price: "$25.00",
    oldPrice: "$29.00",
    discount: "15%",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    price: "$20.00",
    oldPrice: "$21.00",
    discount: "5%",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img2,
    title: "Fashion T-Shirt",
    price: "$15.00",
    oldPrice: "$16.00",
    discount: "8%",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Danh Mục Sản Phẩm
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* Card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3 relative group transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[320px] w-[250px] object-cover rounded-md transition-all duration-300 group-hover:brightness-75"
                />
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs py-1 px-2 rounded-md">
                  {data.discount} {/* Hiển thị phần trăm giảm giá */}
                </div>
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="font-bold text-lg">
                    {data.price}
                    <span className="line-through text-gray-400 ml-2">{data.oldPrice}</span>
                  </p>
                </div>
                {/* Add to Cart and View Details buttons */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <button className="flex items-center gap-1 bg-green-600 text-white py-2 px-4 rounded-lg shadow-md transform hover:bg-green-700 hover:shadow-lg transition-all duration-200 ease-in-out">
                    <FaShoppingCart /> Thêm vào giỏ hàng
                  </button>
                  <button className="flex items-center gap-1 bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md transform hover:bg-blue-700 hover:shadow-lg transition-all duration-200 ease-in-out">
                    <FaEye />
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* View All Button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-4 px-7 rounded-lg shadow-md hover:bg-opacity-80 transition-all duration-200">
              Xem tất cả sản phẩm nổi bật
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
