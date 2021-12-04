import React, {useState} from 'react'
import PropTypes from 'prop-types'


export default function Textform(props) {
    const [text, setText] = useState();
   const handleOnchange = (event)=>{
    //    console.log("clicked" + text)
       setText(event.target.value)
   }
   const UpperCase = ()=>{
       let newText = text.toUpperCase();
       setText(newText);
   }
   const LowerCase = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
}
const copyText = ()=>{
   let text = document.getElementById('myBox');
   text.select();
   navigator.clipboard.writeText(text.value);
}
const extraSpace=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
}
const clearText=()=>{
    let newText = "";
    setText(newText);
}

    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea value={text} onChange={handleOnchange} id="myBox" rows="8" className="form-control" style={{backgroundColor: props.mode==='dark'? 'grey' :'white',color:props.mode=== 'dark'?'white':'black'}}></textarea>

        </div>

        <button className="btn btn-primary" onClick={UpperCase}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={LowerCase}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={copyText}>Copy text</button>
        <button className="btn btn-primary mx-2 my-2" onClick={extraSpace}>Remove Extra Space </button>
        <button className="btn btn-primary mx-2 my-2" onClick={clearText}>Clear text</button>
       
       </div>
    <div className="container">
        <h1>Your text preview</h1>
        <p>{text}</p></div>
       </>
    )
}
