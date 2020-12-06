import React from 'react';
import arrow from '../images/arrow.svg';
import menu from '../images/menu.svg';

interface Props {
  isMenu: boolean;
  onNavigate: () => void;
}

const HeaderComponent: React.FunctionComponent<Props> = ({isMenu, onNavigate}) => {
  return (
    <div className="header-component">
      {isMenu && (
        <button type="button" className="header-button" onClick={(e) => {onNavigate()}}>
          <img src={arrow} className="header-image" alt="back" />
        </button>
      )}
      {!isMenu && (
        <button type="button" className="header-button" onClick={(e) => {onNavigate()}}>
          <img src={menu} className="header-image" alt="menu" />
        </button>
      )}
      <h1 className="header-title">{isMenu ? 'Menu' : 'Register card form'}</h1>
    </div>
  );
}

export default HeaderComponent;
