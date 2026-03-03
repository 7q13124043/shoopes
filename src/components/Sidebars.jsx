export default function Sidebars() {
  return (
    <aside className="w-48 text-sm text-gray-700">
      {/* Danh mục */}
      <h3 className="font-bold text-base mb-4 flex items-center gap-2 border-b pb-2">
        ☰ TẤT CẢ DANH MỤC
      </h3>
      <ul className="space-y-3 mb-8">
        <li className="text-[#ee4d2d] font-semibold cursor-pointer">▶ Thời Trang Nam</li>
        <li className="hover:text-[#ee4d2d] cursor-pointer">Thời Trang Nữ</li>
        <li className="hover:text-[#ee4d2d] cursor-pointer">Điện Thoại & Phụ Kiện</li>
        <li className="hover:text-[#ee4d2d] cursor-pointer">Máy Tính & Laptop</li>
      </ul>

      {/* Bộ lọc */}
      <h3 className="font-bold text-base mb-4 flex items-center gap-2 border-b pb-2">
        ⚙ BỘ LỌC TÌM KIẾM
      </h3>
      <div className="mb-4">
        <p className="mb-3">Khoảng Giá</p>
        <div className="flex gap-2 items-center mb-3">
          <input type="text" placeholder="TỪ" className="w-full border p-1 outline-none focus:border-gray-400" />
          <span className="text-gray-400">-</span>
          <input type="text" placeholder="ĐẾN" className="w-full border p-1 outline-none focus:border-gray-400" />
        </div>
        <button className="w-full bg-[#ee4d2d] hover:bg-[#d73d22] text-white py-1.5 uppercase font-medium rounded-sm transition">
          Áp dụng
        </button>
      </div>
    </aside>
  );
}