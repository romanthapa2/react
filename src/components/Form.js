import React from "react";
import { useState } from "react";


export default function Form(props) {
  const [text, setText] = useState('');
  const handleOnChange= (e)=>{
    setText(e.target.value);
  }
  const changeUpString=()=>{
    let newtext=text.toUpperCase();
    setText(newtext)
  }
  const changeDownString=()=>{
    let lownewtext=text.toLowerCase();
    setText(lownewtext)
  }
  return (
    <div>
      <div className="form-floating">
        <textarea
          className={`form-control mt-3 text-${props.mode==='light'?'dark':'light'} bg-${props.mode==='light'?'light':'dark'}`}
          value={text}
          onChange={handleOnChange}
          id="floatingTextarea2"
        ></textarea>
        <button type="button" onClick={changeUpString} className={`btn text-${props.mode==='light'?'dark':'light'} btn-${props.mode==='light'?'light':'dark'}`}>
          change to upper case
        </button>
        <button type="button" onClick={changeDownString} className={`btn text-${props.mode==='light'?'dark':'light'} btn-${props.mode==='light'?'light':'dark'} ms-2 mt-2`}>
          change to lower case
        </button>
      </div>
    </div>
  );
}
