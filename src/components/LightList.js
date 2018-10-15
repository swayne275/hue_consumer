import React from "react";

// import the Light component
import Light from "./Light";

function LightList(props) {
    return (
        <div>
            {props.lights.map(l => <Light key={l.id} name={l.name} />)}
        </div>
    );
}

export default LightList;