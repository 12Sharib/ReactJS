import React, { useState } from "react";


export default function TextForm(props) {
  
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","success");
  };
  const LowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase","success");
  };
  const Clear = () =>{
    setText('');
    props.showAlert("Cleared","success");
  }
  const Copy = () => {
    let text = document.getElementById("myBox");
    text.select();
    //Copying the text to clipboard
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to Clipboard","success");

  }
  //ye necessary h iski madad se hi hmm apne textarea m value le sakte h
  const handleOnchange = (event) => {
    // console.log("handle on change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  // setText("new text");
  return (
    <>
      <div className="Container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{backgroundColor: props.mode === 'light'?'grey':'light'}}
            value={text}
            onChange={handleOnchange}
            id="myBox"
            rows="8"
            placeholder="Enter" 
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
          Convert To UpperCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={LowerCase}>
          Convert To LowerCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={Clear}>
          Clear TextArea
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={Copy}>
          CopyText
        </button>
      </div>
      <div className="Container my-3">
        <h2>Your Text Summary</h2>
        <p>Your Para has {text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
        <p>Spaces : {text.split(" ").filter((element)=>{return element.length!==0}).length}</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length >0?text:"Enter Something"}</p>
      </div>
    </>
  );
}
