import React, { useState } from "react";
import "./Questionnaire.css";


const Questionnaire = ({ q, onButtonClick }) => {
    const [answer, setAnswer] = useState(0);

    const AnswerButtons = (noChoices) => {
        let answerArr = [];
        for(let i = 0; i < noChoices.noChoices; i++) {
            answerArr.push(<button key={i} className="button" type="button" onClick={() => setAnswer({i})}>{i}</button>)
        }
        return answerArr;
    }

    return(
        <div className="questionnaire">
            <p>{q.question}</p>
            <div className="buttonZone">
                <AnswerButtons noChoices={q.noChoices} />
            </div>
            <button className="submitButton" type="submit" onClick={() => { onButtonClick(q, answer) }}>Next question</button>
        </div>
    );
}

export default Questionnaire