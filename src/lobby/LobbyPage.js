import React, { Component } from 'react'

import RoomList from './RoomList'
import ChatBlock from './ChatBlock'

export default class LobbyPage extends Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div id={'main-menu'}>
                <RoomList/>
                <ChatBlock/>
            </div>
        );
    }

}