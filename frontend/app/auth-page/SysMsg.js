import {Component} from "react";
import React from "react";

import './SysMsg.css'

export default class SysMsg extends Component{
    render() {
        return (
            <div id={'warnings-block'}>
                <span>Error message here!</span>
            </div>
        );
    }
}