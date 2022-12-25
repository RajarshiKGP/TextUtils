import { useState } from "react";

export default function TextForm(props) {
    const [text, setText] = useState("Enter text here");

    const handleUpChange = () => {
        // console.log("UpperCase was clicked");
        setText(text.toUpperCase());
        props.showAlert("Converted to Upper Case", "success");
    }
    const handleLowChange = () => {
        // console.log("LowerCase was clicked");
        setText(text.toLowerCase());
        props.showAlert("Converted to Lower Case", "success");
    }
    const handleClear = () => {
        // console.log("Clear was clicked");
        setText("");
    }
    const Copy = () => {
        // console.log("Copy was clicked");
        // Get the text field
        var copyText = document.getElementById("myText");

        // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);

        // Alert the copied text
        props.showAlert("Text copied to the clipboard", "success");
    }
    const Speak = () => {
        const msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
    const rmvExtraSpaces = () => {
        setText(text.replace(/[ \t\r]+/g, ' ').trim())
        props.showAlert("Extra Spaces Removed", "success");
    }
    const handleOnChange = (event) => {
        // console.log("On Change");
        // console.log(event);
        setText(event.target.value);
    }

    // text = "new text" --> wrong way to change the state
    // setText("new text") --> correct way to change the text

    return (
        <div className="box" style={{ color: props.mode === "light" ? "black" : "white" }}>
            <div className="container my-4">
                <div className="mb-3">
                    <h3>{props.title}</h3>
                    <textarea className="form-control my-4" id="myText" value={text} onChange={handleOnChange} rows="8" style={{ backgroundColor: props.mode === "dark" ? "rgb(239 185 0 / 66%)" : "white", color: props.mode === "dark" ? "rgb(0 20 255)" : "black", fontWeight: props.mode === "dark" ? "bolder" : "normal", boxShadow: props.mode === "dark" ? "none" : "4px 4px 5px 2px" }}></textarea>
                    <button disabled={text.length === 0} className="btn btn-primary" style={{ margin: "20px" }} onClick={handleUpChange}>Convert to Uppercase</button>
                    <button disabled={text.length === 0} className="btn btn-primary" style={{ margin: "20px" }} onClick={handleLowChange}>Convert to Lowercase</button>
                    <button disabled={text.length === 0} className="btn btn-primary" style={{ margin: "20px" }} onClick={handleClear}>Clear</button>
                    <button disabled={text.length === 0} className="btn btn-primary" style={{ margin: "20px" }} onClick={Copy}>Copy to Clipboard</button>
                    <button disabled={text.length === 0} className="btn btn-primary" style={{ margin: "20px" }} onClick={Speak}>Read Aloud</button>
                    <button disabled={text.length === 0} className="btn btn-primary" style={{ margin: "20px" }} onClick={rmvExtraSpaces}>Remove Extra Spaces</button>
                </div>
            </div>

            <div className="container my-4">
                <h4>Your text summary</h4>
                <p>{text.split(/\s+/).filter(element => { return element.length !== 0 }).length} words, {text.replaceAll(/\s+/g, "").length} letters</p>
            </div>
        </div>
    );
}