import React, { useEffect } from 'react';
import { SocialIcons } from './components';
import Routes from './Routes';

function App() {

  useEffect(() => {
    console.log('Utter client_id', window.client_id);
    console.log('Utter domain_name', window.domain_name);
  }, []);

  return (
    <div className="App">

      <div>
        {/* <SocialIcons /> */}

      </div>
      <Routes />

    </div>
  );
}

export default App;
