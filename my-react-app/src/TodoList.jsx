import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]); // 存儲代辦事項陣列
  const [inputValue, setInputValue] = useState(''); // 存儲輸入框文字

  // 新增事項
  const addTodo = () => {
    if (inputValue.trim() !== '') {
      // 每個 todo 包含 id 和文字內容
      const newTodo = {
        id: Date.now(),
        text: inputValue
      };
      setTodos([...todos, newTodo]);
      setInputValue(''); // 清空輸入框
    }
  };

  // 刪除事項
  const deleteTodo = (id) => {
    // 留下那些「id 不等於被點擊的 id」的事項
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div style={{ padding: '10px' }}>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="輸入代辦事項..."
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button 
          onClick={addTodo}
          style={{ marginLeft: '10px', padding: '8px 15px', cursor: 'pointer' }}
        >
          新增
        </button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map((todo) => (
          <li 
            key={todo.id} 
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              padding: '10px',
              borderBottom: '1px solid #eee',
              gap: '20px'
            }}
          >
            <span>{todo.text}</span>
            <button 
              onClick={() => deleteTodo(todo.id)}
              style={{ 
                backgroundColor: '#ff4d4f', 
                color: 'white', 
                border: 'none', 
                borderRadius: '4px', 
                padding: '5px 10px',
                cursor: 'pointer'
              }}
            >
              刪除
            </button>
          </li>
        ))}
      </ul>
      
      {todos.length === 0 && <p style={{ color: '#999' }}>目前沒有事項喔！</p>}
    </div>
  );
}

export default TodoList;