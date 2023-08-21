import React, { useState } from "react";
import "./App.css";
import { StartingReactProject } from "./components/StartingReactProject";
import { Solution } from "./components/Solution";

function App() {
  const [isSolution, setIsSolution] = useState<boolean>(true);

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
