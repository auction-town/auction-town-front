import './App.css';
import React,{useState} from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Map from './components/Map';
import Footer from './components/Footer';
import Division from './components/Division';

function App() {

  let article = null;
  const [mode, setMode] = useState("map-btn");
  console.log(mode);

  if(mode === "map-btn"){
    article = <Map/>
  }else if(mode ==="calculator"){
    article = <Division/>
  }
  return (
    <div className="App">
      <Header />
      <Nav onChange={(className)=>{
        setMode(className);
      }}/>
      {article}
      <Footer />
    </div>
  );
}

export default App;
