import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import TodoList from './TodoList'; 

const MovieSearch = () => {
  // 定義搜尋關鍵字、電影清單、載入狀態與錯誤訊息
  const [query, setQuery] = useState('Interstellar'); 
  const [movies, setMovies] = useState([]);      
  const [isLoading, setIsLoading] = useState(false); 
  const [error, setError] = useState(null);         

  useEffect(() => {
    if (!query.trim()) {
      setMovies([]);
      return;
    }

    let isMounted = true; 
    
    // 非同步抓取電影資料
    const fetchMovies = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // 使用 TMDB API 進行搜尋
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=e8de1d41367069d80fc4581d77a94463&query=${query}`
        );
        if (isMounted) setMovies(response.data.results || []);
      } catch (err) {
        if (isMounted) setError("無法連線至影院資料庫");
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    // 設定防抖動 (Debounce)，避免頻繁發送 API 請求
    const timer = setTimeout(() => fetchMovies(), 500);
    return () => { isMounted = false; clearTimeout(timer); };
  }, [query]); 

  return (
    <div style={theaterStyles.wrapper}>
      {/* 視覺背景裝飾 */}
      <div style={theaterStyles.glow}></div>
      
      {/* 標題與搜尋框區域 */}
      <div style={theaterStyles.header}>
        <span style={theaterStyles.label}>EXPLORE NEW WORLD</span>
        <h2 style={theaterStyles.title}>CINEMA HUB</h2>
        <div style={theaterStyles.searchContainer}>
          <input
            type="text"
            placeholder="搜尋電影、影集..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={theaterStyles.input}
          />
          <button style={theaterStyles.searchBtn}>SEARCH</button>
        </div>
      </div>

      {/* 搜尋結果列表渲染 */}
      {isLoading ? (
        <div style={theaterStyles.loading}>正在載入經典...</div>
      ) : (
        <div style={theaterStyles.movieGrid}>
          {movies.slice(0, 4).map((movie) => (
            <div key={movie.id} style={theaterStyles.movieCard} className="movie-card">
              <div style={theaterStyles.imageWrapper}>
                <img
                  src={movie.poster_path 
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
                    : "https://via.placeholder.com/300x450?text=No+Poster"}
                  alt={movie.title}
                  style={theaterStyles.poster}
                />
                <div style={theaterStyles.overlay}>
                  <div style={theaterStyles.rating}>⭐ {movie.vote_average?.toFixed(1)}</div>
                  <button style={theaterStyles.playBtn}>WATCH TRAILER</button>
                </div>
              </div>
              <div style={theaterStyles.movieDetails}>
                <h4 style={theaterStyles.movieName}>{movie.title}</h4>
                <p style={theaterStyles.movieYear}>{movie.release_date?.split('-')[0]}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// 個人名片子元件
const BusinessCard = ({ name, job, email, avatar }) => (
  <div style={cardStyles.card}>
    <img src={avatar} alt={name} style={cardStyles.avatar} />
    <h2 style={cardStyles.name}>{name}</h2>
    <p style={cardStyles.job}>{job}</p>
    <p style={cardStyles.email}>{email}</p>
  </div>
);

// 主應用入口
function App() {
  return (
    <div style={pageStyles.container}>
      <h1 style={pageStyles.title}>早安</h1>
      
      {/* 名片展示區域 */}
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

      {/* 待辦事項清單區域 */}
      <div style={{ textAlign: 'center', marginTop: '60px' }}>
        <h1 className="text-3xl text-red-500 font-bold">待辦事項</h1>
        <div style={containerStyle}><TodoList /></div>
      </div>

      {/* 電影搜尋組件 */}
      <MovieSearch />
    </div>
  );
}

/* ==========================================
   樣式定義區域 (Styles)
   ========================================== */

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
  name: { margin: '10px 0 5px 0', color: '#333' },
  job: { color: '#666', fontSize: '0.9rem', marginBottom: '5px' },
  email: { color: '#007bff', fontSize: '0.8rem' }
};

const pageStyles = {
  container: {
    padding: '50px 20px',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif'
  },
  title: { textAlign: 'center', marginBottom: '40px', color: '#222' },
  cardList: { display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }
};

const theaterStyles = {
  wrapper: {
    maxWidth: '1100px',
    margin: '60px auto',
    padding: '60px 20px',
    background: '#0a0a0b',
    borderRadius: '40px',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 40px 100px rgba(0,0,0,0.8)'
  },
  glow: {
    position: 'absolute', top: '-150px', left: '50%', transform: 'translateX(-50%)',
    width: '600px', height: '300px', background: 'radial-gradient(circle, rgba(229,9,20,0.2) 0%, transparent 70%)',
    pointerEvents: 'none'
  },
  header: { textAlign: 'center', marginBottom: '50px' },
  label: { color: '#e50914', letterSpacing: '5px', fontSize: '12px', fontWeight: 'bold' },
  title: { color: '#fff', fontSize: '3rem', margin: '10px 0 30px', letterSpacing: '2px' },
  searchContainer: { display: 'flex', justifyContent: 'center', gap: '10px' },
  input: {
    width: '100%', maxWidth: '400px', padding: '15px 25px', borderRadius: '15px',
    border: '1px solid #333', backgroundColor: '#18181b', color: '#fff', fontSize: '16px', outline: 'none'
  },
  searchBtn: { 
    padding: '0 30px', borderRadius: '15px', border: 'none', 
    backgroundColor: '#e50914', color: '#fff', fontWeight: 'bold', cursor: 'pointer' 
  },
  movieGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '30px' },
  movieCard: {
    backgroundColor: '#18181b', borderRadius: '20px', overflow: 'hidden',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)', cursor: 'pointer',
    border: '1px solid #27272a'
  },
  imageWrapper: { position: 'relative', height: '330px', overflow: 'hidden' },
  poster: { width: '100%', height: '100%', objectFit: 'cover' },
  overlay: {
    position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.6)',
    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
    opacity: 0, transition: 'opacity 0.3s'
  },
  rating: { color: '#facc15', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '15px' },
  playBtn: { 
    padding: '10px 20px', borderRadius: '20px', border: '1px solid #fff', 
    backgroundColor: 'transparent', color: '#fff', fontSize: '12px', fontWeight: 'bold' 
  },
  movieDetails: { padding: '20px' },
  movieName: { color: '#fff', fontSize: '1.1rem', marginBottom: '8px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
  movieYear: { color: '#71717a', fontSize: '14px' },
  loading: { color: '#71717a', textAlign: 'center', padding: '50px' }
};

export default App;