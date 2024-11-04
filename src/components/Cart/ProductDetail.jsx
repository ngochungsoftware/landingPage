import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { FaFacebookF, FaTwitter, FaDribbble, FaLinkedinIn } from 'react-icons/fa';
import ProductInfo from './ProductInfo';
import TopProducts from '../TopProducts/TopProducts';
import Sales from './Sales';




const ProductDetail = () => {
    const [selectedColor, setSelectedColor] = useState('');
    const [quantity, setQuantity] = useState(1);

    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ff9900']; // Color options

    const handleColorClick = (color) => {
        setSelectedColor(color);
        console.log('Selected color:', color);
    };

    const increaseQuantity = () => {
        setQuantity(prev => prev + 1);
    };

    const decreaseQuantity = () => {
        setQuantity(prev => (prev > 1 ? prev - 1 : 1));
    };

    return (
        <section className="shop-detail-section py-20 w-full bg-gray-100">
            <div className="max-w-7.5xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
                {/* Upper Box */}
                <div className="upper-box bg-white shadow-lg rounded-lg p-6">
                    <div className="flex flex-wrap">
                        {/* Gallery Column */}
                        <div className="gallery-column lg:w-1/3 md:w-full sm:w-full mb-6 lg:mb-0">
                            <div className="inner-column">
                                <div className="carousel-outer">
                                    {/* Swiper for Images */}
                                    <Swiper className="content-carousel mb-4 w-1/2"  >
                                        <SwiperSlide>
                                            <figure className="image">
                                                <a href="https://bizweb.dktcdn.net/thumb/1024x1024/100/331/646/products/dsc02823-optimized.jpg?v=1689148902307" className="lightbox-image">
                                                    <img src="https://bizweb.dktcdn.net/thumb/1024x1024/100/331/646/products/dsc02823-optimized.jpg?v=1689148902307" alt="Product" className="rounded-lg" />
                                                </a>
                                            </figure>
                                        </SwiperSlide>
                                        {Array(4).fill().map((_, index) => (
                                            <SwiperSlide key={index}>
                                                <figure className="image">
                                                    <a href="images/resource/products/35.png" className="lightbox-image">
                                                        <img src="https://fado.vn/blog/wp-content/uploads/2023/05/top-7-ao-khoac-bape-va-hoodie-doc-dao-duoc-gioi-tre-san-lung-3.jpg" alt="Product" className="rounded-lg" />
                                                    </a>
                                                </figure>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>

                                    {/* Swiper for Thumbnails */}
                                    <Swiper className="thumbs-carousel">
                                        {Array(4).fill().map((_, index) => (
                                            <SwiperSlide key={index}>
                                                <figure className="thumb">
                                                    <img src={`images/resource/products/3${6 + index}.png`} alt="Thumbnail" className="rounded border border-gray-300" />
                                                </figure>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                        </div>

                        {/* Content Column */}
                        <div className="content-column lg:w-2/3 md:w-full sm:w-full p-6">
                            <div className="inner-column space-y-4">
                                <h3 className="text-3xl font-bold text-gray-800">Áo khoác gió Nike</h3>
                                {/* Rating */}
                                <div className="rating flex items-center">
                                    {[...Array(4)].map((_, index) => (
                                        <span key={index} className="fa fa-star text-yellow-500"></span>
                                    ))}
                                    <span className="fa fa-star text-gray-300"></span>

                                </div>
                                {/* Price */}
                                <div className="price text-2xl font-bold text-red-500 border border-gray-100 p-4 rounded bg-gray-100 flex items-center space-x-2">
                                    <span className="text-black">Giá:</span>
                                    <span>1.600.000đ</span>
                                    <span className="text-gray-500 line-through ml-2">12.320.000đ</span>
                                    <span className="text-red-500 text-base">-34%</span>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <span className="text-black font-semibold">Màu sắc:</span>
                                    <div className="flex space-x-2">
                                        {colors.map((color, index) => (
                                            <span
                                                key={index}
                                                className={`w-6 h-6 rounded-full cursor-pointer border-2 ${selectedColor === color ? 'border-black' : 'border-gray-300'}`}
                                                style={{ backgroundColor: color }}
                                                onClick={() => handleColorClick(color)}
                                            ></span>
                                        ))}
                                    </div>
                                </div>



                                <div className="flex items-center mb-4 space-x-4">
                                    <span className="font-semibold">Model:</span>
                                    <span>NIKE123</span>
                                </div>
                                <div className="flex items-center mb-4 space-x-4">
                                    <span className="font-semibold">Số Lượng:</span>
                                    <div className="flex items-center space-x-2">
                                        <button
                                            className="bg-gray-200 border border-gray-300 rounded-md px-2 hover:bg-gray-300 transition duration-200"
                                            onClick={decreaseQuantity}
                                        >
                                            -
                                        </button>
                                        <input
                                            className="qty-spinner border border-gray-300 rounded-md px-4 py-1 w-16 text-center"
                                            type="text"
                                            value={quantity}
                                            readOnly
                                        />
                                        <button
                                            className="bg-gray-200 border border-gray-300 rounded-md px-2 hover:bg-gray-300 transition duration-200"
                                            onClick={increaseQuantity}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>





                                <div className="flex items-center">
                                    {/* "Thêm vào giỏ" Button */}
                                    <button
                                        className="bg-white text-green-600 py-6 px-12 rounded-md border border-green-700 hover:bg-gray-100 transition duration-200 mr-4"
                                    >
                                        Thêm vào giỏ
                                    </button>

                                    <a
                                        href="shop.html"
                                        className="bg-red-600 text-white py-6 px-12 rounded-md border border-green-700 hover:bg-green-700 transition duration-200 "
                                    >
                                        Mua Ngay
                                    </a>
                                </div>

                                {/* Social Box */}
                                <ul className="social-box flex items-center space-x-4 mb-4">
                                    <li className="text-gray-600 font-semibold">Chia sẻ:</li>
                                    <li>
                                        <a href="https://www.facebook.com/" className="text-blue-600 hover:text-blue-800">
                                            <FaFacebookF />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.twitter.com/" className="text-blue-400 hover:text-blue-600">
                                            <FaTwitter />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://dribbble.com/" className="text-pink-500 hover:text-pink-700">
                                            <FaDribbble />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/" className="text-blue-800 hover:text-blue-900">
                                            <FaLinkedinIn />
                                        </a>
                                    </li>
                                </ul>

                            </div >

                            <div>
                                <div className="mt-10 flex flex-wrap items-center justify-between space-x-2">
                                    <div className="flex items-start space-x-1 w-1/4">
                                        <img
                                            className="w-6 h-6 lazyloaded"
                                            data-src="//theme.hstatic.net/200000690725/1001078549/14/product_info1_desc1_img.png?v=550"
                                            src="//theme.hstatic.net/200000690725/1001078549/14/product_info1_desc1_img.png?v=550"
                                            alt="Miễn phí giao hàng cho đơn hàng từ 500K"
                                        />
                                        <div className="text-gray-800 text-sm flex-1">
                                            Miễn phí giao hàng cho đơn hàng từ 500K
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-1 w-1/4">
                                        <img
                                            className="w-6 h-6 lazyloaded"
                                            data-src="//theme.hstatic.net/200000690725/1001078549/14/product_info1_desc2_img.png?v=550"
                                            src="//theme.hstatic.net/200000690725/1001078549/14/product_info1_desc2_img.png?v=550"
                                            alt="Hàng phân phối chính hãng 100%"
                                        />
                                        <div className="text-gray-800 text-sm flex-1">
                                            Hàng phân phối chính hãng 100%
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-1 w-1/4">
                                        <img
                                            className="w-6 h-6 lazyloaded"
                                            data-src="//theme.hstatic.net/200000690725/1001078549/14/product_info1_desc3_img.png?v=550"
                                            src="//theme.hstatic.net/200000690725/1001078549/14/product_info1_desc3_img.png?v=550"
                                            alt="TỔNG ĐÀI 24/7 :  0964942121"
                                        />
                                        <div className="text-gray-800 text-sm flex-1">
                                            TỔNG ĐÀI 24/7 : 0964942121
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 flex flex-wrap items-center justify-between space-x-2">
                                    <div className="flex items-start space-x-1 w-1/4">
                                        <img
                                            className="w-6 h-6 lazyloaded"
                                            data-src="//theme.hstatic.net/200000690725/1001078549/14/product_info2_desc1_img.png?v=550"
                                            src="//theme.hstatic.net/200000690725/1001078549/14/product_info2_desc1_img.png?v=550"
                                            alt="ĐỔI SẢN PHẨM DỄ DÀNG (Trong vòng 7 ngày khi còn nguyên tem mác)"
                                        />
                                        <div className="text-gray-800 text-sm flex-1">
                                            ĐỔI SẢN PHẨM DỄ DÀNG (Trong vòng 7 ngày khi còn nguyên tem mác)
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-1 w-1/4">
                                        <img
                                            className="w-6 h-6 lazyloaded"
                                            data-src="//theme.hstatic.net/200000690725/1001078549/14/product_info2_desc2_img.png?v=550"
                                            src="//theme.hstatic.net/200000690725/1001078549/14/product_info2_desc2_img.png?v=550"
                                            alt="Kiểm tra, thanh toán khi nhận hàng COD"
                                        />
                                        <div className="text-gray-800 text-sm flex-2 max-w-full">
                                            Kiểm tra, thanh toán khi nhận hàng COD
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-1 w-1/4">
                                        <img
                                            className="w-6 h-6 lazyloaded"
                                            data-src="//theme.hstatic.net/200000690725/1001078549/14/product_info2_desc3_img.png?v=550"
                                            src="//theme.hstatic.net/200000690725/1001078549/14/product_info2_desc3_img.png?v=550"
                                            alt="Hỗ trợ bảo hành, đổi sản phẩm tại tất cả store TORANO"
                                        />
                                        <div className="text-gray-800 text-sm flex-1 max-w-full">
                                            Hỗ trợ bảo hành, đổi sản phẩm tại tất cả store TORANO
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                    <div className="flex items-center ">
                        <ProductInfo />
                    </div>

                </div>
            </div>
            <div>
                <h1 className='text-center text-uppercase text-5xl font-bold'>Sản phẩm liên quan</h1>
                <Sales />
            </div>

        </section>


    )
}

export default ProductDetail;
