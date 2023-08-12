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
        props.showAlert("Your text is successfully copied to clipboard.", "success");
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
        style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'#043b53'}}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Covert text to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Covert text to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleCleClick}>Clear text</button>
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
        <button className="btn btn-primary mx-2" onClick={handleReplClick}>Replace</button>
        <button className="btn btn-primary mx-2" onClick={handlecopylClick}>Copy text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtSpace}>Remove Space</button>

    </div>
    <div className="container my-2" style={{color: props.mode === 'dark'?'white':'#043b53'}}>
        <h2>Your text summary</h2>
        <p>{text.length} characters, {text.split(" ").length} words and {text.split(". ").length} Sentences</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text : "Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
    )
}