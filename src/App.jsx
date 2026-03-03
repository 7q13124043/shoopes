import { useState } from 'react'; // BƯỚC QUAN TRỌNG: Import useState
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import { Routes, Route } from 'react-router-dom';

function App() {
  // Tạo state để lưu trữ từ khóa tìm kiếm, mặc định là chuỗi rỗng
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="bg-[#f5f5f5] min-h-screen flex flex-col font-sans">
      {/* Truyền biến searchQuery và hàm cập nhật setSearchQuery xuống Header */}
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <Routes>
        {/* Truyền biến searchQuery xuống Home để trang này biết đường lọc sản phẩm */}
        <Route path="/" element={<Home searchQuery={searchQuery} />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;