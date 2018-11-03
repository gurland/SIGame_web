import React, { Component } from 'react'

import RoomList from './rooms-list/RoomList'
import CreationMenu from './creation-menu/CreationMenu'
import ChatProfileBlock from './ChatProfileBlock'
import './LobbyPage.css'

export default class LobbyPage extends Component{
    render() {
        return (
            <div id={'main-menu'}>
                <CreationMenu/>
                <ChatProfileBlock/>
            </div>
        );
    }

}