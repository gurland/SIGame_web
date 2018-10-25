import React, { Component } from 'react'

import ChatBlockTabs from './ChatBlockTabs'
import Chat from './Chat'
import UserProfile from './UserProfile'
import './ChatBlock.css'

export default class ChatProfileBlock extends Component{
    constructor(props) {
        super(props);

        this.state = {
            activeTab: 'chat'
        }
    }

    render() {
        return (
            <div className={'main-menu-element'} id={'chat-block'}>
                <ChatBlockTabs/>
                {this.state.activeTab === 'chat' ? <Chat/> : <UserProfile/>}
            </div>
        );
    }

}