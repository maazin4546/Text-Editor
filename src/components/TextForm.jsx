import React, { useState } from 'react'

const TextForm = ({ heading, mode, showAlert }) => {

    const [text, settext] = useState('')

    const upper = () => {
        let newtext = text.toUpperCase()
        settext(newtext)
        showAlert(" Converted to UpperCase!", "success")
    }

    const honchng = (event) => {
        settext(event.target.value)
    }

    const lower = () => {
        let newText = text.toLowerCase()
        settext(newText)
        showAlert(" Converted to LowerCase!", "success")
    }

    const cleard = () => {
        settext("")
        showAlert("  Clear all the text", "success")
    }

    const copied = () => {
        let text = document.getElementById('box')
        text.select()
        navigator.clipboard.writeText(text.value)
        document.getSelection().removeAllRanges();
        showAlert(" Copy to Clipboard!", "success")
    }

    const rsapce = () => {
        let newtext = text.split(/[ ]+/)
        settext(newtext.join(" "))
        showAlert("  Removing all extra spaces", "success")
    }

    return (
        <div className='container font-text' style={{ marginTop: '30px', color: mode === 'dark' ? 'white' : 'black' }}>
            <h1 className='font-heading'>{heading}</h1>
            <div className="form-floating my-4">
                <textarea value={text} onChange={honchng} style={{ height: "200px", backgroundColor: mode === 'dark' ? 'gray' : 'white', color: mode === 'dark' ? 'white' : 'black', fontSize: '20px' }} className="form-control" placeholder="Leave a comment here" id="box"></textarea>
            </div>
            <button disabled={text.length === 0} onClick={upper} type="button" className={`btn btn-${mode === 'dark' ? 'dark' : 'primary'} mx-1 font-heading`}>UpperCase</button>
            <button disabled={text.length === 0} onClick={lower} type="button" className={`btn btn-${mode === 'dark' ? 'dark' : 'primary'} mx-1 font-heading`}>LowerCase</button>
            <button disabled={text.length === 0} onClick={copied} type="button" className={`btn btn-${mode === 'dark' ? 'dark' : 'primary'} mx-1 font-heading`}>Copy</button>
            <button disabled={text.length === 0} onClick={rsapce} type="button" className={`btn btn-${mode === 'dark' ? 'dark' : 'primary'} mx-1 font-heading`}>Spaces</button>
            <button disabled={text.length === 0} onClick={cleard} type="button" className="btn btn-danger mx-1 font-heading">ClearText</button>

            <div className='container my-4'>
                <h2 className='font-heading' style={{ color: mode === 'dark' ? 'light' : 'dark' }}>Your Text Summary</h2>
                <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} : Words {text.length} : Characters</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} : Minutes to Read</p>
                <h3 className='font-heading'>Preview</h3>
                <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
            </div>

        </div>
    )
}

export default TextForm
