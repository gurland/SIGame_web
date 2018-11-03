import {Component} from "react";
import React from "react";

import './Button.css'

export default class Button extends Component{

    render(){
        return(
            <button
                onClick={this.props.onBtnClick}
                disabled={this.props.isDisabled}
                className={this.props.btnClass}
                id={this.props.btnId}
            >
                {this.props.btnText}
            </button>
        )
    }

}