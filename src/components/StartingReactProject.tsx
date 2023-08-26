import React from 'react'
import logo from '../logo.svg'

type Props = {
  onAnchorClick: () => void;
};

export const StartingReactProject = ({ onAnchorClick }: Props) => {
  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a onClick={onAnchorClick} className="App-link">
        Go to Veeam task!
      </a>
    </>
  );
};
