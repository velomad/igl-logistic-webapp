import React,{ useEffect } from 'react';
import Routes from './Routes';

function App() {

  useEffect(() => {
    console.log('Utter client_id',window.client_id);
    console.log('Utter domain_name',window.domain_name);
  }, []);
  
  return (
    <div className="App">
        <Routes />
    </div>
  );
}

export default App;
