import React, { useState } from 'react';
import { Tabs, Tab, Typography, Box } from '@mui/material';

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function ProductInfo() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <div>
      <Tabs value={tabIndex} onChange={handleTabChange} aria-label="Thông tin sản phẩm">
        <Tab label="Mô tả" />
        <Tab label="Đánh giá" />
        <Tab label="Chính sách đổi trả" />
        <Tab label="Chính sách bảo hành" />
      </Tabs>

      <TabPanel value={tabIndex} index={0}>
        {/* Nội dung Mô tả */}
        Áo khoác gió CANTH công nghệ Smart-Tech, cản gió, chống thấm nước, mũ liền, có thể gấp gọn EWCW007 <br/>
        ▪️ Được thiết kế theo đúng form chuẩn của nam giới Việt Nam<br/>
        ▪️ Phiên bản sử dụng công nghệ chống nước HYPER-TEX mới nhất 2024 <br/>

        📌 THÔNG TIN CHI TIẾT<br/>
        * Chất liệu: 100% polyester<br/>
        * Phom: Slim-fit, bo gấu có điều chỉnh<br/>
        * Xuất xứ: Việt Nam<br/>
        * Size: S - M - L - XL<br/>
      </TabPanel>
      <TabPanel value={tabIndex} index={1}>
        {/* Nội dung Đánh giá */}
        Đánh giá từ khách hàng đã mua sản phẩm.
      </TabPanel>
      <TabPanel value={tabIndex} index={2}>
        {/* Nội dung Chính sách đổi trả */}
        Chính sách đổi trả áp dụng trong vòng 7 ngày khi sản phẩm còn nguyên tem mác.
      </TabPanel>
      <TabPanel value={tabIndex} index={3}>
        {/* Nội dung Chính sách bảo hành */}
        Sản phẩm được bảo hành tại tất cả các cửa hàng TORANO.
      </TabPanel>
    </div>
  );
}
