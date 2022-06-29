import './App.css';
import React,{useState} from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {

  //Handling DarkMode button and Dark Mode Logic
  const [text, setText] = useState("Light Mode");
  const [navmod, setNavmod] = useState("navbar navbar-expand-lg navbar-light bg-light");
  const [count, setCount] = useState(0);
  const [style, setStyle] = useState({
    color: 'black',
    backgroundColor: '#d9d9d9',
    height : '100vh'
  });

  let DarkOptionsBtn1 = ({
    backgroundColor: 'red',
    height: '25px',
    width: '25px',
    marginTop: '7px',
    borderRadius: '100%',
  });

  let DarkOptionsBtn2 = ({
    backgroundColor: 'blue',
    height: '25px',
    width: '25px',
    marginTop: '7px',
    marginLeft: '5px',
    borderRadius: '100%',
  });

  const [darkmode_options_code,setDarkmode_options_code] = useState(null);
  const [btntype,setBtnType] = useState("dark");
  
  const handleDarkOptionsBtn1 = ()=>{
    setStyle({
      color: 'white',
      backgroundColor: 'rgb(36 0 0)',
      height : '100vh'
    });
    showAlert("Red-Dark mode has been enabled", "success");
    setBtnType("danger")
  }

  const handleDarkOptionsBtn2 = ()=>{
    setStyle({
      color: 'white',
      backgroundColor: 'rgb(0 16 32)',
      height : '100vh'
    });
    showAlert("Blue-Dark mode has been enabled", "success");
    setBtnType("primary")
  }

  const handleDarkMode = ()=>{
    if (count>2){
      setCount(0)
    }
    setCount(count+1);
    if (count%2===0){
      setNavmod("navbar navbar-expand-lg navbar-dark bg-dark");
      setText("Dark Mode");
      setStyle({
        color: 'white',
        backgroundColor: 'black',
        height : '100vh'
      });
      showAlert("Dark mode has been enabled", "success");
      setBtnType("light")
      setDarkmode_options_code(<><li className="nav-item">
          <button style={DarkOptionsBtn1} onClick={handleDarkOptionsBtn1}></button>
        </li>
        <li className="nav-item">
          <button style={DarkOptionsBtn2} onClick={handleDarkOptionsBtn2}></button>
        </li></>);
    }
    else{
      setNavmod("navbar navbar-expand-lg navbar-light bg-light");
      setText("Light Mode");
      setStyle({
        color: 'black',
        backgroundColor: '#d9d9d9',
        height : '100vh'
      });
      showAlert("Light mode has been enabled", "success");
      setDarkmode_options_code(null);
      setBtnType("dark")
    }
    
  }

  let code = (<div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" onClick={handleDarkMode} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" for="flexSwitchCheckDefault">{text}</label>
</div>);

  //Handling Alert notifications
  const [alert,setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }


  return (
    <>
      <body style={style}>
        <Navbar title = "ReactApp" navMode = {navmod} darkmode_btn = {code} darkmode_options = {darkmode_options_code} />
        <Alert alert = {alert} />
        <TextForm showAlert = {showAlert} heading = "Enter your text to Analyze below" btntype = {btntype}/>
      </body>
    </>
  );
}

export default App;
