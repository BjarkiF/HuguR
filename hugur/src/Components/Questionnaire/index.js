import React from "react";


const Questionnaire = ({ qcode }) => {
    // qcode is some link to the question in the database
    return(
        <div className="questionnaire">
            <h1>Questions!</h1>
            <div className="buttonZone">
                <button className="button">1</button>
                <button className="button">2</button>
                <button className="button">3</button>
                <button className="button">4</button>
                <button className="button">5</button>
            </div>
        </div>
    );
}

export default Questionnaire