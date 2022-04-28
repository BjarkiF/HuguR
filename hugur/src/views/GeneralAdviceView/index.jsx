import React from "react";
import { Route, Link, useParams } from "react-router-dom";

const GeneralAdviceView = () => {
    const { category } = useParams();

    return(
        <div    >
            <h3>Content here for {category}</h3>
            hello
        </div>
    )
};

export default GeneralAdviceView;