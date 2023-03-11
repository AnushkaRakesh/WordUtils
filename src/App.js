import React,{useState} from 'react'
import Navbar from './component/Navbar';
import About from './component/About';
import WordArea from './component/WordArea';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

    const[mode,setMode]=useState("light");
    const toggleMode=()=>{
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = '#042743';
        // showAlert("Dark mode has been enabled","success");
        document.title = "MedPal : Dark Mode";
        setInterval(()=>{
          document.title="It is amazing"
        },2000);
        setInterval(()=>{
          document.title="Hey looks like"
        },1500);
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        // showAlert("Light mode has been enabled","success");
      }
    }

  return (
    <BrowserRouter>
    <div className="App">
    <Navbar toggleMode={toggleMode}/>
      <Routes>
        {/* <Route path="/" element={< />}> */}
          {/* <Route index element={<Home />} /> */}
          <Route path="About" element={<About mode={mode}/>} />
          <Route path="WordArea" element={<WordArea mode={mode}/>} />
        {/* </Route> */}
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
