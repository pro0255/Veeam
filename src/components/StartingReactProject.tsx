import logo from '../logo.svg';
import React from 'react';

type Props = {
  onAnchorClick: () => void;
};

export const StartingReactProject = ({ onAnchorClick }: Props) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a onClick={onAnchorClick} className="App-link">
          Learn React
        </a>
      </header>
    </div>
  );
};
