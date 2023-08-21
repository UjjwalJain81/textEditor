import React, {useState} from "react";

export default function TextForm(props) {
    const handleUpClick = ()=>{
        setText(text.toUpperCase());
    }

    const handleLoClick = ()=>{
        setText(text.toLowerCase());
    }

    const handleCleClick = ()=>{
        setText("");
        props.showAlert("Your whole text is deleted", "success");

    }

    const handleReplClick = ()=>{
        const regex = new RegExp(findtext, 'g');
        setText(text.replace(regex, replacetext)); 
        setfindtext("");
        setreplacetext("");   
    }

    const handlecopylClick = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard!", "success");
    }

   const handleExtSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
   }

    // const handleOnChange = (event) =>{
    //     setText(event.target.value);
    // }
    // const handleOnChange1 = (event) =>{
    //     setfindtext(event.target.value);
    // }
    // // const handleOnChange2 = (event) =>{
    // //     setreplacetext(event.target.value);
    // // }

    const [text, setText] = useState('');
    const [findtext, setfindtext] = useState('');
    const [replacetext, setreplacetext] = useState('');

    return(
    <>
    <div className="container" style={{color: props.mode === 'dark'?'white':'#043b53'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={(e)=>{
            setText(e.target.value);
        }} id="myBox" rows="8" 
        style={{backgroundColor: props.mode === 'dark'?'#13466e':'white', color: props.mode === 'dark'?'white':'#043b53'}}></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Covert text to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Covert text to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCleClick}>Clear text</button>
        <input 
            type="text" 
            value={findtext} onChange={(e)=>{setfindtext(e.target.value);}} 
            placeholder="find"
            />
        <input 
            type="text" 
            value={replacetext} onChange={(e)=>{setreplacetext(e.target.value);}} 
            placeholder="Replace"
            />
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleReplClick}>Replace</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handlecopylClick}>Copy text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtSpace}>Remove Space</button>

    </div>
    <div className="container my-2" style={{color: props.mode === 'dark'?'white':'#043b53'}}>
        <h2>Your text summary</h2>
        <p>{text.length} characters, {text.split(" ").filter((element) => {return element.length!=0}).length} words and {text.split(". ").filter((element) => {return element.length!=0}).length} Sentences</p>
        <p>{0.008 * text.split(" ").filter((element) => {return element.length!=0}).length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text : "Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
    )
}