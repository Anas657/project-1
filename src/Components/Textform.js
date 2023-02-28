import React, { useState } from 'react'

export default function Textform(props) {

    const [text, setText] = useState('');

    const handleUpClick = () => {
        // console.log('Hello' + text);
        setText('This is Confirm done');
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }

    const handleLoClick = () => {
        // console.log('Hello' + text);
        setText('This is Confirm done');
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
 
    }
    const handleonchange = (event) => {
        // console.log('This is Hello');
        setText(event.target.value);

    }
    return (

        <>
        <div className='container' style={{color:props.mode==='dark'?'white':'#04273'}}>
            <h1 className='mb-4'>{props.heading}</h1>
                <div className="mb-3">
                 <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}}id="myBox" rows="7"></textarea>
                </div>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to uppercase</button>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLoClick}>Convert to lowercase</button>
            </div>
    
        <div className='container my-2' style={{color:props.mode==='dark'?'white':'#04273'}}>
            <h2>Your Text Summary</h2>
            <p>words {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} and characters {text.length}</p>
             <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
             <h2>Preview</h2>
             <p>{text.length>0?text:"Nothing to Preview here"}</p>
             {text}
             
        </div>
        </>
    )
}
