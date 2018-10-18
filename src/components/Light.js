import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Light.css";

function Light(props) {
    return (
        <div className="light">
            <span>{props.name} ({props.type}): {props.on}</span>
        </div>
    );
}

Light.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    on: PropTypes.string.isRequired,
};

export default Light;