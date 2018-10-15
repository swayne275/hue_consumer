import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Light.css";

function Light(props) {
    return (
        <div className="light">
            <span>{props.name}</span>
        </div>
    );
}

Light.propTypes = {
    name: PropTypes.string.isRequired
};

export default Light;