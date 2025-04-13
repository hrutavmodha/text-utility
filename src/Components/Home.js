import React, { useState, useRef } from 'react'
function Home() {
    const [ivalue, setIvalue] = useState("")
    const [value, setValue] = useState("Output will be shown here")
    const output = useRef(null)
    const clicker = (e) => {
        setIvalue(e.target.value)
        setValue(e.target.value)
    }
    const lowercaser = () => setValue(ivalue.toLowerCase())
    const uppercaser = () => setValue(ivalue.toUpperCase())
    const clear = () => {
        setValue("")
        setIvalue("")
    }
    const copier = () => {
        try {
             navigator.clipboard.writeText(output.current.innerText)
            .then(() => {
                alert("Copied to clipboard")
            }).catch((error) => {
                alert("Error occured while attempting to copying to clipboard")
                console.log(error)
            });
        }
        catch(error){
            alert("Hold the output and then select the option of 'Copy' to copy the output to the clipboard")
        }
            
    const titlecaser = () => {
        let ans = ivalue[0].toUpperCase()
        for (let i = 1; i < ivalue.length; i++) {
            if (ivalue[i - 1] === " ")
                ans = ans + ivalue[i].toUpperCase()
            else
                ans = ans + ivalue[i].toLowerCase()
        }
        setValue(ans);
    }
    const revstr = () => setValue(ivalue.split("").reverse().join(""))
    const sencaser = () => {
        let ans = ivalue[0].toUpperCase()
        for (let i = 1; i < ivalue.length; i++) {
            if (ivalue[i - 1] === "." || ivalue[i - 2] === ".")
                ans = ans + ivalue[i].toUpperCase()
            else
                ans = ans + ivalue[i].toLowerCase()
        }
        setValue(ans)
    }
    const casetogle = () => {
        let ans = ""
        for (let i = 0; i < ivalue.length; i++) {
            if (ivalue[i].toLowerCase() === ivalue[i])
                ans = ans + ivalue[i].toUpperCase()
            else
                ans = ans + ivalue[i].toLowerCase()
        }
        setValue(ans)
    }
    return (
        <div>
            <h1>Web Text App</h1><br />
            <div id="main">
                <h2>Input</h2>
                <textarea onChange={clicker} value={ivalue} />
                <h2>Live Preview</h2>
                <p id="output" ref={output}>{value}</p>
                <h2>Extra Stats</h2>
                <p>{"Number of lines: " + (value.length > 0 ? value.split("\n").length : 0)}</p>
                <p>{"Number of sentences: " + (value.length > 0 ? value.split(".").length : 0)}</p>
                <p>{"Number of characters: " + value.length}</p>
                <p>{"Number of words: " + (value.length > 0 ? value.split(" ").length : 0)}</p>
                <p>{"Characters per word: " + Math.round((value.length / value.split(" ").length) * 100) / 100}</p>
            </div>
            <div className="main">
                <button onClick={lowercaser}>Convert to Lower Case</button>
                <button onClick={uppercaser}>Convert to Upper Case</button>
                <button onClick={titlecaser}>Convert to Title Case</button>
                <button onClick={sencaser}>Convert to Sentence Case</button>
                <button onClick={casetogle}>Toggle the Case</button>
                <button onClick={revstr}>Reverse the Text</button>
                <button onClick={copier}>Copy to Clip Board</button>
                <button onClick={clear}>Clear All</button>
            </div>
        </div>
    )
}
export default Home;
