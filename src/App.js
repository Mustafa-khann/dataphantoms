import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [showFinalDestination, setShowFinalDestination] = useState(false);
  const [glitchText, setGlitchText] = useState('DATA PHANTOMS');
  const [copied, setCopied] = useState(false);

  const handleShowFinalDestination = () => {
    setShowFinalDestination(true);
  };

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      const glitchChance = Math.random();
      if (glitchChance > 0.7) {
        setGlitchText('D4T4 PH4NT0M5');
        setTimeout(() => setGlitchText('DATA PHANTOMS'), 200);
      }
    }, 2000);

    return () => clearInterval(glitchInterval);
  }, []);

  const encodedMessage = "Q29uZ3JhdHVsYXRpb25zLCBEYXRhIFBoYW50b21zISBZb3XigJl2ZSBjcmFja2VkIHRoZSBjb2RlIGFuZCByZXZlYWxlZCB0aGUgaGlkZGVuIHRydXRoOiAnSW4gdGhlIHNoYWRvd3Mgb2YgZGF0YSwgZXZlcnkgYnl0ZSB0ZWxscyBhIHN0b3J5LicgWW91ciBleHBlcnRpc2UgaW4gbmF2aWdhdGluZyBUaGUgR3JpZCBoYXMgc2V0IHlvdSBhcGFydC4gRW1icmFjZSB0aGlzIHZpY3RvcnkgYW5kIGxldCB5b3VyIGluc2lnaHRzIGd1aWRlIHRoZSBmdXR1cmUh=";

  const handleCopy = () => {
    navigator.clipboard.writeText(encodedMessage).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="App">
      <div className="cyberpunk-background"></div>
      {!showFinalDestination ? (
        <div className="cyberpunk-container">
          <h1 className="glitch" data-text={glitchText}>{glitchText}</h1>
          <p className="subtext">Welcome to Night City, 2077</p>
          <button className="cyberpunk-button" onClick={handleShowFinalDestination}>
            JACK IN
          </button>
        </div>
      ) : (
        <div className="encoded-message">
          <p className="message-body">{encodedMessage}</p>
          <button className="copy-button" onClick={handleCopy}>
            {copied ? 'Copied!' : 'Copy Code'}
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
