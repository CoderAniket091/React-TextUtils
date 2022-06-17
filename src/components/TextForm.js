import React, {useState} from 'react';
import PropTypes from 'prop-types';

export default function TextForm(props) {
    //Handling Uppercase Button Click
    const handleUpClick = ()=>{
        setText(text.toUpperCase());
        
    }

    //Handling Lowercase Button Click
    const handleLowClick = ()=>{
        setText(text.toLowerCase());
    }

    //Handling Clear Text Button Click
    const handleClearText = ()=>{
        setText("");
    }

    //Handling Capitalized Case Button Click
    const handleCapClick = ()=>{
        var newLine = text[0].toUpperCase()
        for (let i = 1; i < text.length; i++) {
            if (text[i-1] === " " || text[i-1] === "\n"){
                newLine = newLine + text[i].toUpperCase()
            }
            else{
                newLine = newLine + text[i].toLowerCase()
            }

            
        }
        setText(newLine)
    }

    //Handling On Change
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    //text = "new text"; #Wrong way to change the text
    //SetText("new text"); #Correct way to change the text

    //Word Count And character count logic updated
    var cnt = 0;
    for (const w in text) {
        if (text[w]!==" " && text[w]!=="\n"){
            cnt++;
        }
        };
    
    var wcnt = 0;
    let words = text.split(" ");
    for (const i in words) {
        if (words[i]!=="") {
            wcnt++;
        }
    };
    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" onChange={handleOnChange} value={text}       id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>UPPERCASE</button>
                <button className="btn btn-primary mx-1" onClick={handleLowClick}>lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleCapClick}>Capitalized</button>
                <button className="btn btn-danger mx-1" onClick={handleClearText}>Clear</button>
            </div>

            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <p>{wcnt} words and {cnt} Characters</p>
                <p>{0.008 * wcnt} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    );
}

TextForm.propTypes = {
    heading : PropTypes.string,
}

TextForm.defaultProps = {
    heading : "Set Heading here",
}
