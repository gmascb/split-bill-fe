import './App.css';
import React from 'react';
import CartsService from './services/carts'

function App() {
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    async function fetchData() {
      const result = await CartsService.getCarts();
      setData(result);
    }
    fetchData();
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">

      <div className="App">
        <h1>Meu Projeto React</h1>
        <p>ID: {data.id}</p>
        <p>Título: {data.title}</p>
      </div>

      </header>
    </div>
  );
}

export default App;
