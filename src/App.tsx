import React, { useCallback, useState } from 'react';
import './App.css';
import { StartingReactProject } from './components/StartingReactProject';
import { Solution } from './components/Solution';

function App() {
  const [isSolution, setIsSolution] = useState<boolean>(true);

  const pepa = useCallback(() => {
    console.log(isSolution);
  }, [isSolution]);

  return (
    <>
      {isSolution ? (
        <Solution />
      ) : (
        <StartingReactProject onAnchorClick={() => setIsSolution(true)} />
      )}
    </>
  );
}

export default App;
