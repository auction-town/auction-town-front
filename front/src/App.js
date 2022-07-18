import './App.css';
import React,{useState} from 'react';
import axios from 'axios';
import Header from './components/Header';
import Nav from './components/Nav';
import Map from './components/Map';
import Footer from './components/Footer';
import Division from './components/Division';
import Login from './components/Login'
import Search from './components/Search'

function App() {

  let article = null;
  const [mode, setMode] = useState("map-btn");

  if(mode === "map-btn"){
    article = <Map/>
  }else if(mode === "calculator"){
    article = <Division/>
  }else if(mode === "login"){
    article = <Login onChange={(id) =>{
      setMode(id);
    }}/>
  }else if(mode === "search_id" || mode === "search_go_id"){
    article = <><Login/><Search searchId={mode} onChange={(id)=>{
      setMode(id);
    }}/></>
  }else if(mode === "search_pw" || mode === "search_go_pw"){
    article = <><Login/><Search searchId={mode} onChange={(id)=>{
      setMode(id);
    }}/></>
  }

  console.log(mode);
  return (
    <div className="App">
      <Header onChange={(className)=>{
        setMode(className);
      }}/>
      <Nav onChange={(className)=>{
        setMode(className);
      }}/>
      {article}
      <Footer />
    </div>
  );
}

export default App;
