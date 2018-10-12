import {Component} from "react";
import React from "react";

export default class SysMsg extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <span style={{color: "red"}}></span>
            </div>
        ); //TODO: Add different variants of warnings
    }
}