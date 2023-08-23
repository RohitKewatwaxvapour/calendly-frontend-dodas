import logo from './logo.svg';
import './App.css';
import { PopupWidget, PopupButton, InlineWidget } from "react-calendly";
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="App">
      Dodas test 
      <iframe  
        src="https://calendly.com/dodoas/dodas-test"
        width="70%"
        height="600"
        frameborder="0"
      ></iframe>
    </div>
  );
}

export default App;
