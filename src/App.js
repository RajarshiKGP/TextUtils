import './App.css';
import NavBar from './components/NavBar';
import Alerts from './components/Alerts';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const modeChange = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#3b3a3a"
      showAlert("Dark Mode is enabled", "success")
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode is enabled", "success")
    }
  }
  return (
    <Router>
      <div className="App">
        <NavBar about="Know More" title={"TextUtils"} toogleMode={modeChange} mode={mode} />
        {/* <NavBar/> */}
        <Alerts alert={alert} />
        <div className="Content">
          <Routes>
            <Route exact path='/TextUtils' element={<TextForm title="Enter the text to analyse below" mode={mode} showAlert={showAlert} />} />
            <Route exact path='/about' element={<About mode={mode} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
