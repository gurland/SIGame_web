import React, {Component} from 'react'

import './Room.css'

export default class Room extends Component{

    render() {
        return (
            <a id={'room-link'} href={this.props.roomLink}>
                <li className={'room'} id={this.props.roomId}>
                    <div className="room-element is-locked"><i className="fas fa-lock"/></div>
                    <div className="room-element room-name"><span>Саня, ты в порядке?</span></div>
                    <div className="room-element room-package"><span>Аниме пак</span></div>
                    <div className="room-element players"><span>2/3</span></div>
                </li>
            </a>
        );
    }

}