import React, { useCallback, useState } from 'react';
import './App.css';
import { StartingReactProject } from './components/StartingReactProject';
import { Solution } from './components/Solution';
import { DefaultLayout } from './layout/DefaultLayout';

function App() {
  const [isSolution, setIsSolution] = useState<boolean>(false);

  const pepa = useCallback(() => {
    console.log(isSolution);
  }, [isSolution]);

  return (
    <DefaultLayout>
      {isSolution ? (
        <Solution />
      ) : (
        <StartingReactProject onAnchorClick={() => setIsSolution(true)} />
      )}
    </DefaultLayout>
  );
}

export default App;
