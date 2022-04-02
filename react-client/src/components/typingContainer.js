import React, { useState } from 'react';
import { jsSubString } from './jsSnippet';
import Stats from './stats';
import Span from './span';


function TypingContainer() {

    // useState for snippet and user input
    const [currentSnippet, setCurrentSnippet] = useState(jsSubString)
    const [userInput, setUserInput] = useState('')
    const [userActive, setUserActive] = useState(false)

    // convert current snippet
    const snippetObject = currentSnippet.split('')

    // display snippet in seperate spans
    const displaySnippet = snippetObject.map((snippet, index) => (
        <Span
            userInput={userInput}
            key={index}
            index={index}
            snippetCharacter={snippet}
        />)
    )

    const onFocus = () => setUserActive(true)
    const onBlur = () => setUserActive(false)

    console.log(userActive)

    const handleChange = (e) => {

        setUserInput(e.target.value.split(''))

    }

    return (

        <div className="card" id="typing-container">
            <Stats userActive={userActive} />
            <div className="snippet" id="snippet"> {displaySnippet} </div>

            <textarea className="user-input" id="userInput" spellCheck="false" placeholder='Start Typing...' onChange={handleChange} onFocus={onFocus} onBlur={onBlur} ></textarea>
        </div>

    )
}

export default TypingContainer;