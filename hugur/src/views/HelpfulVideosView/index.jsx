import React from "react";
import { Route, Link, UseParams, useParams } from "react-router-dom";

const HelpfulVideosView = () => {
    const category = useParams();

    return(
        <div>
            <h3>Content here</h3>
        </div>
    )
};

export default HelpfulVideosView;