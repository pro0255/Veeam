import React, { useState } from 'react';
import './App.css';
import { StartingReactProject } from './components/StartingReactProject';
import { Solution } from './components/Solution';
import { DefaultLayout } from './layout/DefaultLayout';

function App() {
  const [isSolution, setIsSolution] = useState<boolean>(false);

  return (
    <>
      {isSolution ? (
        <Solution />
      ) : (
        <DefaultLayout>
          <StartingReactProject onAnchorClick={() => setIsSolution(true)} />
        </DefaultLayout>
      )}
    </>
  );
}

export default App;
