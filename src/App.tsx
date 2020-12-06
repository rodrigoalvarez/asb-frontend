import React, { useState } from 'react';
import HeaderComponent from './components/Header';
import MenuComponent from './components/Menu';
import FormComponent from './components/Form';
import './App.css';

function App() {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <div className="app">
      <header>
        <HeaderComponent />
      </header>
      <main>
        {isMenu && <MenuComponent />}
        {!isMenu && <FormComponent/>}
      </main>
    </div>
  );
}

export default App;
