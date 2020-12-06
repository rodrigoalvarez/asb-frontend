import React, { useState } from 'react';
import HeaderComponent from './components/Header';
import MenuComponent from './components/Menu';
import FormComponent from './components/Form';
import './App.css';

function App() {
  const userName = 'Rodrigo';
  const [isMenu, setIsMenu] = useState(false);

  const toggleMenu = () => {
    setIsMenu(!isMenu);
  };

  return (
    <div className="app">
      <header>
        <HeaderComponent isMenu={isMenu} onNavigate={toggleMenu} />
      </header>
      <main>
        {isMenu && <MenuComponent />}
        {!isMenu && <FormComponent userName={userName} />}
      </main>
    </div>
  );
}

export default App;
