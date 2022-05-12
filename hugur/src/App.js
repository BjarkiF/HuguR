import NavBar from "./Components/NavBar";
import React, { useEffect } from 'react';

function App() {

  useEffect(() => {
    document.title = "HuguR";
  }, [])

  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
