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
                <span>Введен неправальный пароль!</span>
            </div>
        ); //TODO: Add different variants of warnings
    }
}