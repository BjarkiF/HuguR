import React from "react";
import { Route, Link, useParams } from "react-router-dom";
import './GeneralExercise.css'

const GeneralExerciseView = () => {
    const { category } = useParams();

    return (
        <div className="GeneralExercise">
            <h3>Exercise</h3>
            <div className="ExerciseBackground">
                <div className="Circle"> 
                <img src="/play.svg" alt="image" />
                </div>
            </div>
        </div>
    )
};

export default GeneralExerciseView;