import React, { useState } from 'react';
import './App.css';
// import Header from './pages/Header';
// import Background from './pages/Background';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// <div className="App">
//   <Header />
//   <Background />
// </div>


  function App() {
  const [mode,setMode] = useState('');
  const [alert, setAlert] = useState (null);
  const showAlert =(message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  
const removeBodyClasses=()=>{
  document.body.classList.remove('bg-light')
  document.body.classList.remove('bg-dark')
  document.body.classList.remove('bg-warning')
  document.body.classList.remove('bg-danger')
  document.body.classList.remove('bg-success')
}

  const toggleMode =(cls) =>{
    removeBodyClasses();
   console.log(cls);
   document.body.classList.add('bg-'+cls)
   if (mode === 'light') {
    setMode('dark');
    showAlert("dark mode has been Enable", "success")
    Document.title = "TextUtils- Dark Mode";
   } 
   else {
    setMode('light');
    showAlert("light mode has been Enable", "success")
    Document.title = "TextUtils- Light Mode";
   
   }

  }

  return (

       <>
       {/* <Navbar title="Textutils"/> */}
       <BrowserRouter>
      
    
         
       <Navbar title="Textutils" aboutText="About Textutils" mode={mode} togglemode={toggleMode}/>
       {/* <Navbar/> */}
       {/* <About mode={mode} /> */}
       <Alert alert={alert}/>
       <div className='container my-4'>
       <Routes>
      
        <Route path="/" element={<Textform showAlert={showAlert} heading= "Convert to Uppercase, Convert to Lowercase" />} />
        <Route path="about/" element={<About />} />
      </Routes>

       </div>
    </BrowserRouter>          
       </>
  );
}

export default App;
