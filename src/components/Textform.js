import React, { useState } from 'react'

export default function Textform(props) {
    // for uppercase
    const toUppercae = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('success', 'Converted into uppercase')
    }

    // for lowecase
    const toLowercase = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('success', 'Converted into lowercase')
    }

    //handle Onchange 
    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    const clearText = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert('success', 'Text Removed')
    }

    const [text, setText] = useState('');
    return (
       <>
        <div className='container'>
            <h2 className={`text-${props.mode==='light'?'dark':'light'} mb-3`}>{props.heading}</h2>
            <div className="mb-3">
                <textarea className={`form-control text-${(props.mode==='dark' || props.mode==='success')?'light':'dark'}`} style={{backgroundColor: (props.mode==='dark' || props.mode==='success')?'#101f36':'#fff'}} value={text} id="textBox" onChange={handleOnChange} rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className={`btn btn-${props.mode==='success'?'success':'primary'} btn-sm m-2`} onClick={toUppercae} >Convert To Uppercase</button>
            <button disabled={text.length===0} className={`btn btn-${props.mode==='success'?'success':'primary'} btn-sm m-2`} onClick={toLowercase} >Convert To Lowercase</button>
            <button disabled={text.length===0} className={`btn btn-${props.mode==='success'?'success':'primary'} btn-sm m-2`} onClick={clearText} >Clear Text</button>
        </div>
        <div className="container my-2">
            <h2 className={`text-${props.mode==='light'?'dark':'light'}`} >Text Summary</h2>
            <p className={`text-${props.mode==='light'?'dark':'light'}`} >{text.split(/\s+/).filter((element)=>{return element !== 0}).length} characters {text.length} words</p>
            <p className={`text-${props.mode==='light'?'dark':'light'}`} >{0.008 * text.split(" ").filter((element)=>{return element.length!== 0}).length} Mintues to read</p>
            <h2 className={`text-${props.mode==='light'?'dark':'light'}`} >Preview</h2>
            <p className={`text-${props.mode==='light'?'dark':'light'}`} >{text.length>0?text:'Nothing to Preview'}</p>
        </div>
        </>
    )
}
