import React, { Component } from 'react'

import RoomList from './RoomList'
import ChatProfileBlock from './ChatProfileBlock'
import './LobbyPage.css'

export default class LobbyPage extends Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div id={'main-menu'}>
                <RoomList/>
                <ChatProfileBlock/>
            </div>
        );
    }

}