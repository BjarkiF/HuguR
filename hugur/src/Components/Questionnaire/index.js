import { Button, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import React, { useState } from "react";
import "./Questionnaire.css";


const Questionnaire = ({ q, onButtonClick }) => {
    const [answer, setAnswer] = useState(0);

    const AnswerButtons = (noChoices) => {
        let answerArr = [];
        let pssAnswers = ["Never", "Almost never", "Sometimes", "Fairly often", "Very often"];
        let phqAnswers = ["Not at all", "Several days", "More than half the days", "Nearly every day"]
        for(let i = 0; i < noChoices.noChoices; i++) {
            if (noChoices.noChoices === 4) {
                answerArr.push(<FormControlLabel value={i} key={i} control={<Radio />} onClick={() => setAnswer({i})} label={phqAnswers[i]} labelPlacement="bottom" />)
            } else if (noChoices.noChoices === 5) {
                answerArr.push(<FormControlLabel value={i} key={i} control={<Radio />} onClick={() => setAnswer({i})} label={pssAnswers[i]} labelPlacement="bottom" />)
            }
        }
        return answerArr;
    }

    return(
        <div className="questionnaire">
            { q.qcode === "pss" ? (
                <Typography variant="h5">For Each Question choose the most appropriate option</Typography>    
            ) : (
                <Typography variant="h5">How often have have you experienced the following over the past 2 weeks?</Typography>    
            ) }
            <Typography sx={{ mt:5 }} variant="h4">{q.question}</Typography>            
            <div className="buttonZone">
                <RadioGroup defaultValue={0} name="questionnaire-radio" row="column">
                    <AnswerButtons noChoices={q.noChoices} />
                </RadioGroup>
            </div>
            <Button variant="contained" color="success" type="submit" onClick={() => { onButtonClick(q, answer) }}>Next question</Button>
        </div>
    );
}

export default Questionnaire