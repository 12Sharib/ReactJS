
import TextForm from "./Components/TextForm";
import Navbar from "./Components/Navbar";
import Alert from "./Components/Alert";
import React,{useState} from "react";



function App() {
  const [mode,setDarkmode] = useState('light');
  const [alert, setAlert] = useState(null);
  

//Alert Function
  const showAlert =(message,type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    },1000)
  }
//Mode (Dark or Light)  
  const toggleMode = () =>{
    if(mode === 'light'){
      setDarkmode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert("Dark mode Enables","success");
    }
    else{
      setDarkmode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode Enables","success");
    }
  }
  return (
    <>
   
      <Navbar title="TextCorrector" mode={mode} enableDarkMode={toggleMode} about = "About Site"  />
      <Alert alert={alert}/>
      <div className="container">
       
         
            <TextForm heading = " Enter the text for Analyse" showAlert={showAlert}/>
          
      </div>
    </>
    
  );
}
export default App;

