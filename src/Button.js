import {Component} from "react";
import React from "react";

import './Button.css'

export default class Button extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <button
                onClick={this.props.onBtnClick}
                className={this.props.btnClass}
                id={this.props.btnId}
            >
                {this.props.btnText}
            </button>
        )
    }

}