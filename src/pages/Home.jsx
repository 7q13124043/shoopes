import Sidebar from '../components/Sidebar';
import { products } from '../data/products';
import { Link } from 'react-router-dom';

// Nhận searchQuery từ App.jsx
export default function Home({ searchQuery }) {
  
  // Lọc sản phẩm: chuyển cả tên sản phẩm và từ khóa về chữ thường (toLowerCase) để tìm kiếm chính xác hơn
  const filteredProducts = products.filter((product) => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex-1 flex w-full max-w-[1200px] mx-auto px-4 py-6 gap-6">
      <Sidebar />
      
      <main className="flex-1">
        {/* Kiểm tra xem danh sách đã lọc có sản phẩm nào không */}
        {filteredProducts.length > 0 ? (
          // Nếu có: Hiển thị dạng Grid như bình thường
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filteredProducts.map((product) => (
              <Link to={`/product/${product.id}`} key={product.id} className="bg-white p-3 rounded-sm shadow-sm hover:shadow-md transition block">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-2" />
                <h2 className="text-sm text-gray-800 line-clamp-2 min-h-[40px]">{product.name}</h2>
                <div className="flex items-center justify-between mt-4">
                  <p className="text-[#ee4d2d] font-medium">{product.price.toLocaleString()} ₫</p>
                </div>
                <button 
                  className="w-full mt-3 bg-[#ee4d2d]/10 text-[#ee4d2d] border border-[#ee4d2d] py-1.5 text-sm rounded-sm hover:bg-[#ee4d2d] hover:text-white transition"
                  onClick={(e) => { e.preventDefault(); alert("Đã thêm vào giỏ!"); }}
                >
                  Thêm vào giỏ
                </button>
              </Link>
            ))}
          </div>
        ) : (
          // Nếu không có: Hiển thị thông báo trống
          <div className="flex flex-col items-center justify-center bg-white h-full min-h-[400px] rounded-sm shadow-sm">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-xl font-medium text-gray-800">Không tìm thấy sản phẩm nào</h2>
            <p className="text-gray-500 mt-2">Vui lòng thử lại với từ khóa khác</p>
          </div>
        )}
      </main>
    </div>
  );
}