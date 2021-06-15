import React, { useState } from 'react';
import Alerts from './components/Alerts';
import './App.css';
import { CollapsedContext } from './contexts/Collapsed';


function App() {
  const [collapsed, setCollapsed] = useState(false);
  
  return (
    <CollapsedContext.Provider value={[collapsed, setCollapsed]}>
      <div className="App">
        <Alerts />
      </div>
    </CollapsedContext.Provider>
  );
}

export default App;
