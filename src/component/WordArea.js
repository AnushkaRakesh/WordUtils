import React,{useState} from 'react'

export default function WordArea(props) {
  const[text,setText]=useState('');
 
  const handleUpClick=()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!","sucesss");
}
const handleLoClick=()=>{
  let newText = text.toLowerCase();
  setText(newText);
  props.showAlert("Converted to LowerCase!");
}
const handleCopyText = () => {
        navigator.clipboard.writeText(text);
 }
const handleClearClick=()=>{
  let newText = '';
  setText(newText);
}
const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
}
const handleOnChange=(event)=>{
 setText(event.target.value);
}
let myStyle={
  color:props.mode === 'dark'?'white':'#042743',
  backgroundColor:props.mode === 'dark'?'#042743':'white',
  border:'2px solid',
  borderColor:props.mode==='dark'?'#042743':'white'
 }

  return (
    
    <div class="container">
    <h2 style={myStyle}>Write Text to Analysize </h2>
    <label for="exampleFormControlTextarea1">Comment here</label>
    <textarea id="exampleFormControlTextarea1"value={text} rows="3" onChange={handleOnChange} style={{width:'70%',height:'70%',mb:'20px',mt:'50px'}}></textarea>
    <div className="container">
        <button className='btn btn-primary' onClick={handleLoClick} style={{margin:'10px'}}>Covert to LowerCase</button>
        <button className="btn btn-primary" onClick={handleUpClick} style={{margin:'10px'}}>Convert to UpperCase</button>
        <button className="btn btn-primary"onClick={handleCopyText} style={{margin:'10px'}}>Copy Text</button>
        <button className="btn btn-primary" onClick={handleClearClick} style={{margin:'10px'}}>Clear Text</button>
        <button type="submit" onClick={speak} className="btn btn-primary mx-2 my-2" style={{margin:'10px'}}>Speak Text</button>
    </div>
  </div>
  )
}
