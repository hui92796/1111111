






import React from 'react';






// 1. 定義名片元件 (BusinessCard)


// 這個元件負責接收資料 (props) 並決定怎麼顯示


function BusinessCard({ name, job, email, avatar }) {


  return (


    <div style={cardStyles.card}>


      <img src={avatar} alt={name} style={cardStyles.avatar} />


      <h2 style={cardStyles.name}>{name}</h2>


      <p style={cardStyles.job}>💼 {job}</p>


      <p style={cardStyles.email}>✉️ {email}</p>


    </div>


  );


}






// 2. 主元件 (App)


function App() {


  return (


    <div style={pageStyles.container}>


      <h1 style={pageStyles.title}>我的團隊成員</h1>


     


      <div style={pageStyles.cardList}>


        {/* 使用我們剛才定義好的 BusinessCard 元件 */}


        <BusinessCard


          name="黃松鼠"


          job="吃飯睡覺打咚咚"


          email="lovely123456789@example.com"


          avatar="https://vignette.wikia.nocookie.net/twicenation/images/5/5e/Navely.jpg/revision/latest?cb=20190216025020"


        />






        <BusinessCard


          name="黃映瑄"


          job="南台科大五專生"


          email="5b2g0018@stust.edu.tw"


          avatar="https://vignette.wikia.nocookie.net/twicenation/images/6/6e/Savely.jpg/revision/latest?cb=20190216032006"


        />


      </div>


    </div>


  );


}






// 3. 樣式設定 (簡單的 CSS-in-JS)


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


    marginBottom: '15px'


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