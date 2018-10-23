import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Light.css";

function Light(props) {
    return (
        <div className="light">
            <h1>{props.name}</h1>
            <h2>{props.type}</h2>
            <h3>Status: {props.on}</h3>
        </div>
    );
}

Light.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    on: PropTypes.string.isRequired,
};

export default Light;