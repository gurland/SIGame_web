import React, {Component} from 'react'

import './Room.css'

export default class Room extends Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <li className={'room'}>
                <div className="is-locked"><i className="fas fa-lock"></i></div>
                <div className="room-index"><span>1.</span></div>
                <div className="room-name"><span>Саня, ты в порядке? </span></div>
                <div className="room-package"><span>Аниме пак</span></div>
                <div className="players"><span>2/3</span></div>
            </li>
        );
    }

}