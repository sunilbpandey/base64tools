import { useEffect, useState } from 'react';
import { Buffer } from 'buffer';
import './App.css';
import { Container } from './components/Container';
import { Header } from './components/Header';

function App() {
  const [mode, setMode] = useState("decode");
  const [originalText, setOriginalText] = useState("");
  const [convertedText, setConvertedText] = useState("");

  const _atob = (str: string) => Buffer.from(str).toString("base64");
  const _btoa = (str: string) => Buffer.from(str, "base64").toString();

  useEffect(() => {
    if (originalText) {
      setConvertedText(mode === "decode" ? _atob(originalText) : _btoa(originalText));
    };
  }, [originalText, mode]);

  const _handleModeChange = (newMode:string) => {
    setMode(newMode);
  }

  const _onTextChange = (event:any) => {
    setOriginalText(event.target.value);
  }

  return (
    <div className="App">
      <Header></Header>
      <div className="content">
        <Container mode={mode} setMode={_handleModeChange} convertedText={convertedText} onTextChange={_onTextChange} />
      </div>
    </div>
  );
}

export default App;
