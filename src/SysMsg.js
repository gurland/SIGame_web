import {Component} from "react";
import React from "react";

import './SysMsg.css'

export default class SysMsg extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div id={'warnings-block'}>
                <span>Error message here!</span>
            </div>
        ); //TODO: Add different variants of warnings
    }
}