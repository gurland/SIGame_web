import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import './InterfaceElements.css'

class Button extends Component{
    constructor(props){
        super(props);

        // this.state = {isClicked: false};
        this.handleClick = this.handleClick.bind(this);
    }

    render(){
        return(
            <button>{this.props.btnText}</button>
        )
    }

    handleClick(){
        //TODO: Add click handler
    }

}

class Input extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <input type={this.props.inputType}/>
        )
    }
}

class SysMsg extends Component{
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



export {Button, Input, SysMsg};