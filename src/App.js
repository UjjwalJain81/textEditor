import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import userEvent from '@testing-library/user-event';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#043b53';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }



  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className='container my-3'>
      <Routes>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/" element={<TextForm heading="Enter the text to analyze below"  mode={mode} showAlert={showAlert}/>}/>
          {/* <TextForm heading="Enter the text to analyze below"  mode={mode} showAlert={showAlert}/> */}
      </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
