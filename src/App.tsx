import { useState } from 'react';
import { Buffer } from 'buffer';
import './App.css';
import { Container } from './components/Container';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';

function App() {
  const [mode, setMode] = useState("decode");
  const [originalText, setOriginalText] = useState("");
  const [convertedText, setConvertedText] = useState("");

  const _handleModeChange = (newMode:string) => {
    setOriginalText("");
    setConvertedText("");
    setMode(newMode);
  }

  const _onTextChange = (event:any) => {
    setOriginalText(event.target.value);
  }

  const _atob = (str: string) => Buffer.from(str).toString("base64");
  const _btoa = (str: string) => Buffer.from(str, "base64").toString();

  const _onConvertClick = () => {
    setConvertedText(mode === "decode" ? _atob(originalText) : _btoa(originalText));
  }

  return (
    <div className="App">
      <Header></Header>
      <div className="content">
        <Navigation selectedItem={mode} onItemClick={_handleModeChange}/>
        <Container mode={mode} convertedText={convertedText} onTextChange={_onTextChange} onConvertClick={_onConvertClick} />
      </div>
    </div>
  );
}

export default App;
