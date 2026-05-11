import React from 'react';
import TodoList from './TodoList'; // 確保檔案路徑正確

// 1. 先定義子元件 BusinessCard 
const BusinessCard = ({ name, job, email, avatar }) => {
  return (
    <div style={cardStyles.card}>
      <img src={avatar} alt={name} style={cardStyles.avatar} />
      <h2 style={cardStyles.name}>{name}</h2>
      <p style={cardStyles.job}>{job}</p>
      <p style={cardStyles.email}>{email}</p>
    </div>
  );
};

// 2. 主元件 App 
function App() {
  return (
    <div style={pageStyles.container}>
      <h1 style={pageStyles.title}>早安</h1>

      {/* 名片清單區塊 */}
      <div style={pageStyles.cardList}>
        <BusinessCard
          name="Chen Liang Hui"
          job="躺在床上睡覺"
          email="huihuihui123@gamil.com"
          avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO0uWXJbr1Up6s86p_mCsTq0b4bj40agbrug&s"
        />

        <BusinessCard
          name="陳亮卉"
          job="南臺科大五專生"
          email="5b2g0006@stust.edu.tw"
          avatar="https://pbs.twimg.com/profile_images/1911052131307569152/Gtw7xkPs_400x400.jpg"
        />
      </div>

      {/* 待辦事項區塊 */}
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <h1 className="text-3xl text-red-500 font-bold">待辦事項</h1>
        <div style={containerStyle}>
          <TodoList />
        </div>
      </div>
    </div>
  );
}

// 3. 所有的樣式設定
const containerStyle = {
  textAlign: 'center',
  marginTop: '20px',
  padding: '20px',
  border: '1px dashed #ccc',
  borderRadius: '10px',
  backgroundColor: '#fff',
  width: 'fit-content',
  margin: '20px auto'
};

const cardStyles = {
  card: {
    border: '1px solid #e0e0e0',
    borderRadius: '15px',
    padding: '20px',
    width: '280px',
    textAlign: 'center',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    margin: '10px'
  },
  avatar: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    backgroundColor: '#f0f0f0',
    marginBottom: '15px',
    objectFit: 'cover'
  },
  name: {
    margin: '10px 0 5px 0',
    color: '#333'
  },
  job: {
    color: '#666',
    fontSize: '0.9rem',
    marginBottom: '5px'
  },
  email: {
    color: '#007bff',
    fontSize: '0.8rem'
  }
};

const pageStyles = {
  container: {
    padding: '50px 20px',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif'
  },
  title: {
    textAlign: 'center',
    marginBottom: '40px',
    color: '#222'
  },
  cardList: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  }
};

export default App;