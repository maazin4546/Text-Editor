import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from './components/About';
import Alert from './components/Alert';

function App() {

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#333333'
      showAlert(" Dark mode has been enabled", "success")
      document.title = "Text Editor - Dark Mode"
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert(" Light mode has been enabled", "success")
      document.title = "Text Editor - Light Mode"
    }
  }

  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route path='/' element={<TextForm mode={mode} showAlert={showAlert} heading="Text Editor Application" />} />
          <Route path='/about' element={<About mode={mode} />} />
        </Routes>
      </Router>
      <div className='position-absolute top-100 start-50 translate-middle'>
        <p style={{fontSize:'12px', fontFamily:'Lora'}}>By Developer Maazin</p>
      </div>
    </>
  )
}

export default App
