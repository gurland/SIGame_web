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
                <div className={this.state.isBeingHovered ? 'showed' : 'hidden'}
                     id="load-avatar-button">
                    <a href="#">
                        <span style={this.state.isBeingHovered
                                        ? { color: '#ffe682',
                                            transition: '0.4s'}
                                        : { color: 'transparent'}}
                        >
                            Загрузить
                        </span>
                    </a>
                </div>
            </div>
        );
    }

}