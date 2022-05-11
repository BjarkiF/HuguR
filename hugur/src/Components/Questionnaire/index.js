import React from "react";
import "./Questionnaire.css";


const Questionnaire = ({ q }) => {
    // qcode is some link to the question in the database
    // const qquestion = qcode.content;
    console.log('IN questionnaire, with qcode: ' + q.qcode + ' and question ' + q.question);
    return(
        <div className="questionnaire">
            <p>{q.question}</p>
            <div className="buttonZone">
                <button className="button" type="button" value={"answer"}>1</button>
                <button className="button" type="button" value={"answer"}>2</button>
                <button className="button" type="button" value={"answer"}>3</button>
                <button className="button" type="button" value={"answer"}>4</button>
                <button className="button" type="button" value={"answer"}>5</button>
            </div>
            <button className="submitButton" type="submit">Next question</button>
        </div>
    );
}

export default Questionnaire