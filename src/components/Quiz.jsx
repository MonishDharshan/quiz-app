import { useState } from "react";
import QUESTIONS from '../questions.js'

export default function Quiz() {
    const [selectedAns , setSelectedAns] = useState([])
    const selectedQuestionIndex = selectedAns.length

    function handleSelectAns(chosenAnswer){
        setSelectedAns((prevSelectedAns) => {
            return [...prevSelectedAns, chosenAnswer]
        });
    }

    return (
    <div id="quiz">
        <div id='question'>
            <h2>{QUESTIONS[selectedQuestionIndex].text}</h2>
            <ul id="answers">
                {QUESTIONS[selectedQuestionIndex].answers.map((ans) => <li key={ans} className="answer">
                    <button onClick={() => handleSelectAns(ans)}>
                        {ans}
                    </button>
                </li>)}
            </ul>
        </div>
    </div>
    );
}