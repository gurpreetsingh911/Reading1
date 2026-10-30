import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import japjiData from './data/nitnem/japji.json';

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="app-shell">
      {/* 1. Header */}
      <header className="app-header">
        <h1 className="logo">ਨਿਤਨੇਮ</h1>
        <div className="header-actions">
          {/* Settings / theme toggle placeholder */}
          {/* <button className="icon-btn">⚙️</button> */}

          <button className="main-btn bani-btn2">NITNEM </button>
          <button className="main-btn2 bani-btn2">Khalsa</button>         
          <button className="main-btn2 bani-btn2">Harmony Hub</button>         
          <button className="main-btn2 bani-btn2">Contact Us</button>         


        </div>
      </header>



      <main className="dashboard-container">


        {/* Tab 1: Morning */}
        <section className="category-card">
          <div className="category-header">
            <h2>ਸਵੇਰ (Morning)</h2>
            <span className="badge">5 ਬਾਣੀਆਂ</span>
          </div>
          <div className="bani-grid">
            <button className="bani-btn">ਜਪੁਜੀ ਸਾਹਿਬ</button>
            <button className="bani-btn">ਜਾਪੁ ਸਾਹਿਬ</button>
            <button className="bani-btn">ਤ੍ਵ ਪ੍ਰਸਾਦਿ ਸਵਯੇ</button>
            <button className="bani-btn">ਚੌਪਈ ਸਾਹਿਬ</button>
            <button className="bani-btn">ਅਨੰਦੁ ਸਾਹਿਬ</button>
          </div>
        </section>


        {/* Tab 2: Evening */}
        <section className="category-card">
          <div className="category-header">
            <h2>ਸ਼ਾਮ (Evening)</h2>
            <span className="badge">1 ਬਾਣੀ</span>
          </div>
          <div className="bani-grid">
            <button className="bani-btn">ਰਹਰਾਸਿ ਸਾਹਿਬ</button>
          </div>
        </section>

        {/* Tab 3: Night */}
        <section className="category-card">
          <div className="category-header">
            <h2>ਰਾਤ (Night)</h2>
            <span className="badge">1 ਬਾਣੀ</span>
          </div>
          <div className="bani-grid">
            <button className="bani-btn">ਕੀਰਤਨ ਸੋਹਿਲਾ</button>
          </div>
        </section>

        {/* Tab 4: Ardas */}
        <section className="category-card">
          <div className="category-header">
            <h2>ਅਰਦਾਸ (Ardas)</h2>
          </div>
          <div className="bani-grid">
            <button className="bani-btn">ਅਰਦਾਸ</button>
          </div>
        </section>

      </main>

      {/* 3. Footer */}
      <footer className="app-footer">
        <p>Daily Progress: 0 / 7 Finished</p>
      </footer>
    </div>


  );


}


export default App;