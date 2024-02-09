import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import OrderPizza from './OrderPizza.jsx';



function App() {
  /* const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://github.com/Workintech/fsweb-s7-challenge-pizza" target="_blank">
          <img src={workintech} className="logo" alt="Workintech logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Workintech + 🍕</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Absolute Acı Pizza sayısı {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Workintech or Pizza logos to learn more
      </p>
      <div>
      
      </div>
    </>
  )
  */

  return (
    <div className="App">
      <h1>Pizza Order Form</h1>
      <OrderPizza />
    </div>
  );
}

export default App
