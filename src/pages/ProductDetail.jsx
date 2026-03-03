import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';

export default function ProductDetail() {
  // Lấy ID từ trên thanh URL
  const { id } = useParams(); 
  
  // Tìm sản phẩm có id tương ứng (chuyển id từ chuỗi sang số bằng parseInt)
  const product = products.find((p) => p.id === parseInt(id));

  // Nếu nhập bậy ID không có thật
  if (!product) {
    return <div className="text-center py-20 text-2xl font-bold">Không tìm thấy sản phẩm!</div>;
  }

  return (
    <div className="flex-1 w-full max-w-[1200px] mx-auto px-4 py-6">
      <div className="bg-white p-6 rounded-sm shadow-sm flex flex-col md:flex-row gap-8">
        
        {/* Cột trái: Ảnh sản phẩm */}
        <div className="w-full md:w-2/5">
          <img src={product.image} alt={product.name} className="w-full h-auto object-cover" />
        </div>
        
        {/* Cột phải: Thông tin chi tiết */}
        <div className="w-full md:w-3/5">
          <h1 className="text-2xl font-medium mb-4">{product.name}</h1>
          <div className="bg-gray-50 p-4 mb-6">
            <p className="text-3xl text-[#ee4d2d] font-medium">{product.price.toLocaleString()} ₫</p>
          </div>
          <p className="text-gray-600 mb-8">{product.description}</p>
          
          {/* Nút bấm */}
          <div className="flex gap-4">
            <button className="px-6 py-3 border border-[#ee4d2d] text-[#ee4d2d] bg-[#ee4d2d]/10 hover:bg-[#ee4d2d]/20 rounded-sm transition">
              Thêm Vào Giỏ Hàng
            </button>
            <button className="px-6 py-3 bg-[#ee4d2d] text-white hover:bg-[#d73d22] rounded-sm transition">
              Mua Ngay
            </button>
          </div>

         <div className="mt-8 text-left">
  <Link
    to="/"
    className="text-blue-600 inline-block transition-transform duration-200 hover:scale-105"
  >
Trở về trang chủ 
  </Link>
</div>
        </div>
      </div>
    </div>
  );
}