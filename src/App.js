// import { useState } from 'react';

// export default function App(){
//     const [count,setCount] = useState(0);

//     function handleClick(){
//       setCount(count+1);
//     }
//     return(
//       <div>
//         <h1>Counters that update together</h1>
//         <MyButton count={count} onClick={handleClick}/>
//         <MyButton count={count} onClick={handleClick}/>
//       </div>
//     );
// }
// function MyButton({count,onClick}) {
//   return(
//     <button onClick={onClick}>
//       clicked {count} times
//     </button>
//   );
// }

import React from 'react';
import Form from "./components/Form";
import Navabar from "./components/Navbar";
import { useState } from "react";

export default function App() {
  const [mode,setMode]=useState('light');
  const togglemode= ()=>{
    if (mode==="light"){
      setMode('dark');
      document.body.style.background="black";
    }else{
      setMode('light');
      document.body.style.background="white";
    }
  }

  return (
    <>
  <Navabar title="Roman" mode={mode} togglemode={togglemode}/>
  <div className="container">
    <Form mode={mode} togglemode={togglemode} />
  </div>
  </>
  );
}
