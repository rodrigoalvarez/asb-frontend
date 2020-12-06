import React from 'react';

const MenuComponent: React.FunctionComponent = () => {
  const menu = [
    {
      id: 1,
      title: 'Menu A'
    }, {
      id: 2,
      title: 'Menu B'
    }, {
      id: 3,
      title: 'Menu C'
    }
  ];

  return (
    <div className="menu-component">
      <ul className="menu-list">
        {menu.map(item => (
          <li key={item.id} className="menu-item">{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default MenuComponent;
