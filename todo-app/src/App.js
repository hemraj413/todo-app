
import { useState } from 'react';
import './App.css';
import { Todos } from './components/Todos';

function App() {
  const[isDark,setIsDark] = useState(true)


  return (
    <div className="App">
      <img src={isDark?("./images/bg-desktop-dark.jpg") : ("./images/bg-desktop-light.jpg")} alt='' className='background-img'/>
       <main >
    <div className="heading"  >
    <h1>TODO</h1>
    <img src={isDark?("./images/icon-sun.svg" ): ("./images/icon-moon.svg")} alt=""  onClick={()=>setIsDark(!isDark)}/>
    </div>
    <div className={isDark?"dark-div":"light-div"}>
  
   </div>
   <Todos id={isDark?"":"light"}/>
   </main>
   
    </div>
  );
}

export default App;
