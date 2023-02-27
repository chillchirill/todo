import React from "react";
import pencil from "./images/pencil-svgrepo-com.svg";
import garbish from "./images/standard-trash-can-svgrepo-com.svg";
import del from "./App.js";
const Element = function (props) {
        return (
        <div class="elem">
            <div class="etext">{props.info}</div>
            <div class="jo">
                <input type="checkbox" id="cb"/>
                <img src={pencil} alt="" id="pl"/>
                <img src={garbish} alt="" id="gh"/>
            </div>
        </div>
        );
}

export default Element;
