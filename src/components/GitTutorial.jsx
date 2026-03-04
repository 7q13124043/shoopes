import React, { useState } from 'react';

const GitTutorial = () => {
  const [isLearned, setIsLearned] = useState(false);

  const handleLearnClick = () => {
    setIsLearned(!isLearned);
    console.log("Chúc mừng! Bạn đang làm chủ Git từng bước một.");
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <h1>Học Git cùng Gemini</h1>
      <p>Trạng thái: <strong>{isLearned ? 'Đã hiểu bài ✅' : 'Đang nghiên cứu ✍️'}</strong></p>
      
      <div style={{ margin: '20px 0', border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}>
        <h3>Các lệnh bạn vừa học:</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>🚀 <code>git clone</code> - Lấy dự án về</li>
          <li>🌿 <code>git checkout -b</code> - Tạo nhánh mới</li>
          <li>📥 <code>git pull</code> - Cập nhật code nhóm</li>
          <li>🤝 <code>git merge</code> - Gộp các thay đổi</li>
        </ul>
      </div>

      <button 
        onClick={handleLearnClick}
        style={{
          padding: '10px 20px',
          backgroundColor: '#2ecc71',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        {isLearned ? 'Học lại' : 'Đã hiểu lệnh Merge!'}
      </button>
    </div>
  );
};

export default GitTutorial;