import React, { useState } from 'react';

const GitTutorial = () => {
  const [isLearned, setIsLearned] = useState(false);

  // 1. Tách dữ liệu ra mảng (Dễ dàng thêm lệnh mới sau này)
  const GIT_COMMANDS = [
    { icon: '🚀', cmd: 'git clone', desc: 'Lấy dự án về' },
    { icon: '🌿', cmd: 'git checkout -b', desc: 'Tạo nhánh mới' },
    { icon: '📥', cmd: 'git pull', desc: 'Cập nhật code nhóm' },
    { icon: '🤝', cmd: 'git merge', desc: 'Gộp các thay đổi' },
    { icon: '📤', cmd: 'git push', desc: 'Đẩy code lên mây' },
  ];

  const handleLearnClick = () => {
    setIsLearned(prev => !prev); // Cách viết update state chuẩn hơn
    console.log("Chúc mừng! Bạn đang làm chủ Git từng bước một.");
  };

  // 2. Định nghĩa Style chung (Tránh viết lặp lại)
  const styles = {
    container: { padding: '20px', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', textAlign: 'center' },
    card: { margin: '20px auto', maxWidth: '400px', border: '1px solid #eaeaea', padding: '20px', borderRadius: '12px', backgroundColor: '#fafafa' },
    list: { listStyle: 'none', padding: 0, textAlign: 'left' },
    listItem: { marginBottom: '10px', fontSize: '1.1rem' },
    button: {
      padding: '12px 24px',
      backgroundColor: isLearned ? '#95a5a6' : '#2ecc71',
      color: 'white',
      border: 'none',
      borderRadius: '25px', // Bo tròn kiểu hiện đại
      cursor: 'pointer',
      transition: '0.3s ease', // Thêm hiệu ứng mượt mà
      fontWeight: 'bold'
    }
  };

  return (
    <div style={styles.container}>
      <h1>Học Git cùng Gemini</h1>
      <p style={{ fontSize: '1.2rem' }}>
        Trạng thái: <strong>{isLearned ? 'Đã hiểu bài ✅' : 'Đang nghiên cứu ✍️'}</strong>
      </p>
      
      <div style={styles.card}>
        <h3 style={{ color: '#34495e' }}>Lộ trình làm chủ Git:</h3>
        <ul style={styles.list}>
          {/* 3. Sử dụng .map() để hiển thị danh sách lệnh */}
          {GIT_COMMANDS.map((item, index) => (
            <li key={index} style={styles.listItem}>
              {item.icon} <code>{item.cmd}</code>: {item.desc}
            </li>
          ))}
        </ul>
      </div>

      <button onClick={handleLearnClick} style={styles.button}>
        {isLearned ? 'Học lại từ đầu' : 'Tôi đã thông thạo!'}
      </button>
    </div>
  );
};

export default GitTutorial;