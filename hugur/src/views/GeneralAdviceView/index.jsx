import React from "react";
import { Route, Link, useParams } from "react-router-dom";
import './GeneralAdvice.css'

const GeneralAdviceView = () => {
    const { category } = useParams();

    return (
        <div>
            <h3 className='AdviceTitle'>General Advice</h3>
            <img className="AdviceImg" src='https://ouch-cdn2.icons8.com/84YfJ-zmrSn5mTel8itZt4TZUUq3yDroERkfRa5v-NU/rs:fit:912:912/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvODE2/L2NhZmFiZTA0LTZl/NDEtNGJhYy05ODhj/LWRhNzI2N2NkZjc2/NC5wbmc.png' alt='Check internet please' />
            <h3 className="AdviceDescription AdviceTitle">Benefits of exercise</h3>
            <p className="AdviceText">

                It can reduce your risk of major illnesses, such as coronary heart disease, stroke, type 2 diabetes and cancer and lower your risk of early death by up to 30%.<br/>
                Research shows that physical activity can also boost self-esteem, mood, sleep quality and energy, as well as reducing your risk of stress, clinical depression, dementia and Alzheimer's disease.<br/>

                It's free, easy to take, has an immediate effect and you don't need a GP to get some. Its name? Exercise.<br/>

                Exercise is the miracle cure we've always had, but for too long we've neglected to take our recommended dose. Our health is now suffering as a consequence.<br/>

                This is no snake oil. Whatever your age, there's strong scientific evidence that being physically active can help you lead a healthier and happier life.<br/>

                People who exercise regularly have a lower risk of developing many long-term (chronic) conditions, such as heart disease, type 2 diabetes, stroke, and some cancers.<br/>
            </p>
        </div>
    )
};

export default GeneralAdviceView;