import React, { Component } from 'react'

import RoomList from './rooms-list/RoomList'
import CreationMenu from './creation-menu/CreationMenu'
import Tab from './Tab'
import './ListCreationBlock.css'

export default class ListCreationBlock extends Component{
    constructor(props) {
        super(props);

        this.state = {
            currentActiveTab: 'rooms-list'
        };

        this.showRoomsList = this.showRoomsList.bind(this);
        this.showCreationMenu = this.showCreationMenu.bind(this);
    }

    showCreationMenu(){
        this.setState({
            currentActiveTab: 'creation-menu'
        });
    }

    showRoomsList(){
        this.setState({
            currentActiveTab: 'rooms-list'
        });
    }

    render() {
        return (
            <div className={'main-menu-element'} id={'list-creation-block'}>
                <div id={'tabs'}>
                    <Tab tabText={'Список комнат'}
                         tabId={'rooms-list-tab'}
                         onTabClick={this.showRoomsList}/>
                    <Tab tabText={'Создать комнату'}
                         tabId={'creation-menu-tab'}
                         onTabClick={this.showCreationMenu}/>
                </div>
                {this.state.currentActiveTab === 'rooms-list' ? <RoomList/> : <CreationMenu/>}
            </div>
        );
    }

}
