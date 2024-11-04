import React from 'react';
import './Order.css'; // Adjust the path according to your project structure
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/fontawesome-free-6.4.0-web/css/all.css'; // Adjust the path according to your project structure

const Order = () => {
    return (
        <div id="main">
            {/* header */}
            <div id="header">
                <div className="top-header">
                    <div className="box-left">
                        <span> Hotline mua hàng: <a className="sdt the-a" href="">0964942121 </a> (8:30-21:30, Tất cả các ngày trong tuần)</span>
                        <div className="lienhe">
                            <div><div className="gach"></div></div>
                            <a className="lh the-a" href="">Liên hệ</a>
                        </div>
                    </div>
                    <div className="box-right">
                        <a href="" className="the-a ti-announcement"></a>
                        <a href="" className="lh the-a">Thông báo của tôi</a>
                    </div>
                </div>

                <div className="bottom-header">
                    <a href="./index.html">
                        <div className="img-bottom-header">
                            <img src="./assets/img/imgheader/anhlogo1.jpg" alt="" />
                        </div>
                    </a>
                    <div className="container-bottom-header">
                        <ul id="nav">
                            <li><a href="./sale.html">Sale</a></li>
                            <li>
                                <a href="./aonam.html">Áo Nam <i className="ti-angle-down"></i></a>
                                <ul className="subnav">
                                    <div className="subnav-1">
                                        <div className="subnav-list">
                                            {/* Add subnav items here */}
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            <li><a href="./quannam.html">Quần Nam <i className="ti-angle-down"></i></a>
                                <ul className="subnav">
                                    <div className="subnav-1">
                                        <div className="subnav-list">
                                            {/* Add subnav items here */}
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            <li><a href="./index.html">Bộ Sưu tập <i className="ti-angle-down"></i></a>
                                <ul className="subnav">
                                    <div className="subnav-1">
                                        <div className="subnav-list">
                                            {/* Add subnav items here */}
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            <li><a href="./hethongcuahang.html">Hệ Thống Cửa Hàng</a></li>
                        </ul>
                    </div>
                    <div className="profile-bottom-header">
                        <a href="" className="ti-search the-b profile-list-bottom"></a>
                        <a href="./dangnhap.html" className="ti-user the-b profile-list-bottom"></a>
                        <a href="./giohang.html" className="ti-shopping-cart the-b profile-list-bottom"></a>
                    </div>
                </div>
            </div>

            <div className="cart-container">
                <div className="cart-header">
                    <h2>Giỏ hàng của bạn <span>(Bạn đang có 2 sản phẩm)</span></h2>
                    <a href="#">Tiếp tục mua sắm</a>
                </div>
                <div className="cart-items">
                    <div className="cart-item">
                        <img src="./assets/img/quannam/anh10.webp" alt="Tên sản phẩm" />
                        <div className="cart-item-details">
                            <h3>Quần âu slim-fit cạp trơn EABT019</h3>
                            <p>Giá: 100.000 đồng</p>
                            <p>Số lượng: 1</p>
                        </div>
                        <div className="cart-item-actions">
                            <button className="remove-item ">Xóa</button>
                            <button className="decrease-quantity">-</button>
                            <input type="text" className="item-quantity" value="1" />
                            <button className="increase-quantity">+</button>
                        </div>
                    </div>
                    <div className="cart-item">
                        <img src="./assets/img/collection/anh13.webp" alt="Tên sản phẩm" />
                        <div className="cart-item-details">
                            <h3>Áo Polo trơn màu be thêu  ESTP038</h3>
                            <p>Giá: 200.000 đồng</p>
                            <p>Số lượng: 2</p>
                        </div>
                        <div className="cart-item-actions">
                            <button className="remove-item">Xóa</button>
                            <button className="decrease-quantity">-</button>
                            <input type="text" className="item-quantity" value="2" />
                            <button className="increase-quantity">+</button>
                        </div>
                    </div>
                </div>

                <h6>Ghi chú cho đơn hàng</h6>
                <textarea name="" id="" cols="99" rows="10"></textarea>
                <input type="checkbox" name="" id="" /> Xuất hóa đơn cho đơn hàng
                <div className="cod-attention">
                    <p>Phí vận chuyển sẽ được tính ở trang thanh toán.</p>
                    <p>Bạn cũng có thể nhập mã giảm giá ở trang thanh toán (nếu có).</p>
                    <p><span>Chính sách mua hàng:</span>

                        Hiện chúng tôi chỉ áp dụng thanh toán với đơn hàng có giá trị tối thiểu 0₫ trở lên.</p>
                </div>
                <div className="cart-total">
                    <p>Tổng cộng: 500.000 đồng</p>
                    <a href="#">Tiến hành thanh toán</a>
                </div>
                <h5>Có thể bạn sẽ thích </h5>
                <ul className="section-child">
                    {/* Add section child items here */}
                </ul>
            </div>

            {/* footer */}
            <div className="footer">
                <div className="footer-child">
                    <div className="footer-group">
                        <div className="footer-list">
                            <div className="footer-card">
                                <div className="footer-card-body">
                                    <h5 className="footer-card-title">Thời Trang Nam TORANO</h5>
                                    <p className="footer-card-text">Hệ thống thời trang cho phái mạnh hàng đầu Việt Nam, hướng tới phong cách nam tính, lịch lãm và trẻ trung.</p>
                                    <div className="listicon-footer">
                                        <a href=""><i className="fa-brands fa-facebook"></i></a>
                                        <a href=""><i className="fa-brands fa-twitter"></i></a>
                                        <a href=""><i className="fa-brands fa-instagram"></i></a>
                                        <a href=""><i className="fa-brands fa-tiktok"></i></a>
                                        <a href=""><i className="fa-brands fa-youtube"></i></a>
                                    </div>
                                    <h5 className="card-title">Phương thức thanh toán</h5>
                                    <img src="./assets/img/footer/footer-2/anh1.webp" alt="" />
                                    <img src="./assets/img/footer/footer-2/anh2.webp" alt="" />
                                    <img src="./assets/img/footer/footer-2/anh3.webp" alt="" />
                                    <img src="./assets/img/footer/footer-2/anh4.webp" alt="" />
                                    <img src="./assets/img/footer/footer-2/anh5.webp" alt="" />
                                    <img src="./assets/img/footer/footer-2/anh6.webp" alt="" />
                                </div>
                            </div>
                            {/* Add more footer cards here */}
                        </div>
                    </div>
                </div>
            </div>

            {/* footer-copyright */}
            <div className="footer-copyright">
                <a href="">Copyright © 2023 Make By TunPhm <i className="fa-solid fa-face-grin-wink"></i></a>
            </div>
        </div>
    );
};

export default Order;