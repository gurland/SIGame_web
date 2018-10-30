import React, {Component} from 'react'

import './Avatar.css'

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
        console.log(this.state.isBeingHovered);
    }

    toggleHoverState(){
        return({
           isBeingHovered: !this.state.isBeingHovered
        });
    }

    render() {
        return (
            <div className={'profile-element'} id="avatar">
                <i className="fas fa-user avatar"
                   id={'avatar-image'}
                   onMouseEnter={this.handleHover}
                   onMouseLeave={this.handleHover}/>
                <div className={this.state.isBeingHovered ? 'showed' : null} id="load-avatar-button">
                    <a href="#">Загрузить изображение</a>
                </div>
            </div>
        );
    }

}