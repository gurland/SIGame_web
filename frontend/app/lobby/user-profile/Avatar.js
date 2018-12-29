import React, {Component} from 'react'

import './Avatar.css'
import LoadPopup from "./LoadPopup";

export default class Avatar extends Component{
    constructor(props) {
        super(props);

        this.state = {
            isBeingHovered: false
        };

        this.toggleHoverState = this.toggleHoverState.bind(this);
        this.handleHover = this.handleHover.bind(this);
    }

    handleHover(){
        this.setState(this.toggleHoverState);
    }

    toggleHoverState(){
        return({
           isBeingHovered: !this.state.isBeingHovered
        });
    }

    render() {
        return (
            <div className={'profile-element'}
                 id="avatar"
                 onMouseEnter={this.handleHover}
                 onMouseLeave={this.handleHover}>
                <i className="fas fa-user avatar"
                   id={'avatar-image'}/>
                {this.state.isBeingHovered
                    ? <LoadPopup popupClass={this.state.isBeingHovered ? 'showed' : 'hidden'}
                                 popupStyle={this.state.isBeingHovered
                                            ? { color: '#ffe682',
                                                transition: '0.4s'}
                                            : { color: 'transparent'}}/>
                    : null}
            </div>
        );
    }

}