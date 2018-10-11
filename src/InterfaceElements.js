import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import './InterfaceElements.css'

class Button extends Component{
    constructor(props){
        super(props);

        this.state = {isToggledOn: false};
        this.handleToggle = this.handleToggle.bind(this);
    }

    render(){
        return(
            <button>{this.props.btnText}</button>
        )
    }

    handleToggle(){
        //TODO: Add toggle handler
        this.setState(() => ({
            isToggledOn: !(this.state.isToggledOn)
        }));
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