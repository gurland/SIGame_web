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
        };

        this.showChat = this.showChat.bind(this);
        this.showProfile = this.showProfile.bind(this);
    }

    showChat(){
        this.setState({activeTab: 'chat'})
    }

    showProfile(){
        this.setState({activeTab: 'profile'})
    }

    render() {
        return (
            <div className={'main-menu-element'} id={'chat-profile-block'}>
                <div id={'chat-block-tabs'}>
                    <Tab tabId={'chat-tab'}
                         tabText={'Чат'}
                         onTabClick={this.showChat}/>
                    <Tab tabId={'profile-tab'}
                         tabText={'Профиль'}
                         onTabClick={this.showProfile}/>
                </div>
                {this.state.activeTab === 'chat' ? <Chat/> : <UserProfile/>}
            </div>
        );
    }

}