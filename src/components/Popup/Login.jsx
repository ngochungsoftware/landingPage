import React from 'react';

const Login = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white p-8 rounded-lg shadow-lg w-96">
        {/* Nút Đóng */}
        <button className="absolute top-4 right-4 text-gray-600 hover:text-gray-900" onClick={onClose}>
          Đóng
        </button>

        <div className="sitenav-content__title mb-4">
          <p className="text-2xl font-semibold text-gray-800">Đăng nhập tài khoản</p>
          <p className="text-sm text-gray-600">Nhập email và mật khẩu của bạn:</p>
        </div>
        
        {/* Form đăng nhập */}
        <form action="/account/login" method="post" id="customer_login" className="space-y-4">
          <input name="form_type" type="hidden" value="customer_login" />
          <input name="utf8" type="hidden" value="✓" />

          <div className="form__input-wrapper">
            <input 
              type="email" 
              id="login-customer[email]" 
              className="form__field form__field--text border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-primary" 
              name="customer[email]" 
              required 
              placeholder=" "
            />
            <label htmlFor="login-customer[email]" className="form__floating-label">Email</label>
          </div>

          <div className="form__input-wrapper">
            <input 
              type="password" 
              id="login-customer[password]" 
              className="form__field form__field--text border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-primary" 
              name="customer[password]" 
              required 
              autoComplete="current-password" 
              placeholder=" "
            />
            <label htmlFor="login-customer[password]" className="form__floating-label">Mật khẩu</label>
            <div className="sitebox-recaptcha text-sm mt-2 text-gray-600">
              This site is protected by reCAPTCHA and the Google 
              <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Privacy Policy</a> 
              and <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Terms of Service</a> apply.
            </div>
          </div>

          <button type="submit" className="form__submit button dark bg-primary text-white py-2 rounded-lg w-full hover:bg-primary-dark transition duration-200">
            Đăng nhập
          </button>
        </form>

        <div className="site_account_secondary-action mt-4 text-center">
          <p className="text-sm text-gray-600">Khách hàng mới? 
            <a className="link text-blue-600 hover:underline" href="/account/register"> Tạo tài khoản</a>
          </p>
          <p className="text-sm text-gray-600">Quên mật khẩu? 
            <button aria-controls="header-recover-panel" className="js-link link text-blue-600 hover:underline" onClick={() => {/* Switch to recovery form */}}>Khôi phục mật khẩu</button>
          </p>
        </div>

        {/* Form phục hồi mật khẩu */}
        <div id="header-recover-panel" className="site_account_panel site_account_sliding hidden">
          <div className="sitenav-content__title mb-4">
            <p className="text-2xl font-semibold text-gray-800">Khôi phục mật khẩu</p>
            <p className="text-sm text-gray-600">Nhập email của bạn:</p>
          </div>
          <form action="/account/recover" method="post">
            <input name="form_type" type="hidden" value="recover_customer_password" />
            <input name="utf8" type="hidden" value="✓" />

            <div className="form__input-wrapper">
              <input 
                type="email" 
                id="recover-customer[recover_email]" 
                className="form__field form__field--text border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-primary" 
                name="email" 
                required 
                placeholder=" "
              />
              <label htmlFor="recover-customer[recover_email]" className="form__floating-label">Email</label>
              <div className="sitebox-recaptcha text-sm mt-2 text-gray-600">
                This site is protected by reCAPTCHA and the Google 
                <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Privacy Policy</a> 
                and <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Terms of Service</a> apply.
              </div>                
            </div>
            <button type="submit" className="form__submit button bg-primary text-white py-2 rounded-lg w-full hover:bg-primary-dark transition duration-200" id="form_submit-recover">
              Khôi phục
            </button>
          </form>

          <div className="site_account_secondary-action mt-4 text-center">
            <p className="text-sm text-gray-600">Bạn đã nhớ mật khẩu? 
              <button aria-controls="header-login-panel" className="js-link link text-blue-600 hover:underline" onClick={() => {/* Switch to login form */}}>Trở về đăng nhập</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
