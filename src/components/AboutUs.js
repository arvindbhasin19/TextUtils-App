import React, { useState } from 'react'

export default function AboutUs(props) {

    const myStyle = {
        color: (props.mode === 'dark') ? '#fff' : '#06162d',
        backgroundColor: (props.mode === 'dark') ? '#06162d' : '#fff'
    }

    return (
        <>
            <div className="container pb-4">
                <h1 className={`text-${(props.mode === 'light') ? 'dark' : 'light'}`}>About Us</h1>
                <p className={`text-${(props.mode === 'light') ? 'dark' : 'light'}`}>
                    TextUtils is a ReactJs website built primarily to do various operations on regular typed text. You can safely use WordPad or NotePad for text drafting, and saving, but TextUtils offers much more than simple text drafting and formatting. TextUtils can convert your text to any case in just one simple click of a button. It can extract links and numbers safely from a labyrinth of random text or sophisticated documentation. It has an improved property of base64 encoding, reversal of your inputted text.You can even remove whitespaces from your scripted documents, and wear up your earphones to listen to it, instead of straining your eyes! It does a detailed analyzing of your text, and provides an output of words, and characters, along with reading time as well. The best part of TextUtils is that it is an open source project, as a result, dozens of new features are in the upcoming, which definitely makes it a cut above the rest.
                    The most eminent features of the website are as follows :
                </p>
                <div className="accordion" id="accordionExample" >
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <strong>Analyse Your text</strong>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                It is a Simple Text Analyzer , which mutilates your text, but in a tender way.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <strong>Free To Use</strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                It is completely free to use. No credit cards required. Use as much as you want!!
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <strong>Browser Compatible</strong>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                It is compatible with all of your favorite browsers.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container">
                <button className={`btn btn-${modeBtnColor} my-3`} onClick={toggleBtn} >{btnText}</button>
            </div> */}
        </>
    )
}
