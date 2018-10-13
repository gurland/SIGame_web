import {Component} from "react";
import React from "react";

export default class Input extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <input
                type={this.props.inputType}
                placeholder={this.props.inputText}/>
        )
    }
}