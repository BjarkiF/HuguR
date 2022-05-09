import React from "react";
import "./Questionnaire.css";


const Questionnaire = ({ qcode }) => {
    // qcode is some link to the question in the database
    // const qquestion = qcode.content;
    return(
        <div className="questionnaire">
            <p>Question goes here</p> {/* Will be qquestion */}
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