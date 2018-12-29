import React, { Component } from 'react'

import ListCreationBlock from './ListCreationBlock'
import ChatProfileBlock from './ChatProfileBlock'
import './LobbyPage.css'

export default class LobbyPage extends Component{
    render() {
        return (
            <div id={'main-menu'}>
                <ListCreationBlock/>
                <ChatProfileBlock/>
            </div>
        );
    }

}