import React, {Component} from 'react'

import './Room.css'

export default class Room extends Component{

    render() {
        return (
            <a id={'room-link'} href={this.props.roomLink}>
                <li className={'room'} id={this.props.roomId}>
                    <i className="fas fa-lock room-element is-locked"/>
                    <span className="room-element room-name">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor tortor et qq
                    </span>
                    <span className="room-element room-package">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec p</span>
                    <span className="room-element players">2/3</span>
                    <span className="room-element state">В игре</span>
                </li>
            </a>
        );
    }

}