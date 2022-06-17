import './App.css';
import React,{useState} from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

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
    }
    else{
      setNavmod("navbar navbar-expand-lg navbar-light bg-light");
      setText("Light Mode");
      setStyle({
        color: 'black',
        backgroundColor: '#d9d9d9',
        height : '100vh'
      });
    }
    
  }

  //Dark Mode button Css
  let mycss = {
    marginLeft : '90px',
    marginTop : '20px'
  }

  return (
    <>
      <div style={style}>
        <Navbar title = "ReactApp" navMode = {navmod} />
        <div className="form-check form-switch" style={mycss}>
          <input className="form-check-input" type="checkbox" onClick={handleDarkMode} role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" for="flexSwitchCheckDefault">{text}</label>
        </div>
        <div className='container my-4'>
        <TextForm heading = "Enter your text to Analyze below"/>
        </div>
      </div>
    </>
  );
}

export default App;
