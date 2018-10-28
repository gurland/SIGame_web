import React, { Component } from 'react'

import Tab from './Tab'
import Chat from './Chat'
import UserProfile from './UserProfile'
import './ChatProfileBlock.css'

export default class ChatProfileBlock extends Component{
    constructor(props) {
        super(props);

        this.state = {
            activeTab: 'chat'
        }
    }

    render() {
        return (
            <div className={'main-menu-element'} id={'chat-profile-block'}>
                <div id={'chat-block-tabs'}>
                    <Tab tabId={'chat-tab'} tabText={'Чат'}/>
                    <Tab tabId={'profile-tab'} tabText={'Профиль'}/>
                </div>
                {this.state.activeTab === 'chat' ? <Chat/> : <UserProfile/>}
            </div>
        );
    }

}