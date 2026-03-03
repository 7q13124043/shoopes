export default function Header({searchQuery, setSearchQuery}) {
  return (
    // Sử dụng màu cam chuẩn của Shopee: bg-[#ee4d2d]
    <header className="bg-[#ee4d2d] text-white">
      {/* Thanh menu nhỏ trên cùng */}
   <div className="flex justify-between items-center text-xs p-2 w-full max-w-[1200px] mx-auto opacity-90">
        <div className="flex gap-4">
          <span className="cursor-pointer hover:opacity-80">Kênh Người Bán</span>
          <span className="cursor-pointer hover:opacity-80">Tải ứng dụng</span>
        </div>
        <div className="flex gap-4">
          <span className="cursor-pointer hover:opacity-80">Đăng Ký</span>
          <span className="border-l pl-4 cursor-pointer hover:opacity-80">Đăng Nhập</span>
        </div>
      </div>

      {/* Khu vực Logo, Tìm kiếm và Giỏ hàng */}
  <div className="flex items-center justify-between p-4 w-full max-w-[1200px] mx-auto gap-8 pb-6">
        {/* Logo giả lập */}
        <div className="text-3xl font-bold cursor-pointer">
          🛒 Shopee 
        </div>

        {/* Thanh tìm kiếm */}
        <div className="flex-1 flex bg-white rounded-sm p-1 shadow-sm">
         <input 
            type="text" 
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)} 
            className="w-full text-black px-3 outline-none text-sm" 
            placeholder="Tìm kiếm sản phẩm, thương hiệu..." 
          />
         <button className="bg-[#ee4d2d] hover:bg-[#d73d22] transition text-white px-8 py-2 rounded-sm text-sm font-semibold whitespace-nowrap">
  Tìm kiếm
</button>
        </div>

        {/* Giỏ hàng */}
        <div className="text-3xl cursor-pointer relative">
          🛒
          {/* Badge số lượng sản phẩm trên giỏ hàng */}
          <span className="absolute -top-1 -right-2 bg-white text-[#ee4d2d] text-xs font-bold px-2 py-0.5 rounded-full border border-[#ee4d2d]">
            0
          </span>
        </div>
      </div>
    </header>
  );
}