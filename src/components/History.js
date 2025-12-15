import React, { useEffect, useState } from 'react';
import axios from 'axios';

function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token'); 
    axios.get('http://localhost:8080/history', { headers: { Authorization: `Bearer ${token}` } })
      .then(res => setHistory(res.data));
  }, []);

  return (
    <div>
      <h1>Chat History</h1>
      <ul>
        {history.map(item => <li key={item.id}>{item.sessionId} <button>Delete</button> <button>Share</button></li>)}
      </ul>
    </div>
  );
}

export default History;