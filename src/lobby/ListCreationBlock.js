import React, { Component } from 'react'

import RoomList from './rooms-list/RoomList'
import CreationMenu from './creation-menu/CreationMenu'
import Tab from './Tab'
import Button from '../Button'
import './ListCreationBlock.css'

export default class ListCreationBlock extends Component{
    constructor(props) {
        super(props);

        this.state = {
            currentActiveTab: 'rooms-list'
        };
    }

    showCreationMenu(){
        this.setState({
            currentActiveTab: 'creation-menu'
        });
    }

    render() {
        return (
            <div className={'main-menu-element'} id={'list-creation-block'}>
                <div id={'tabs'}>
                    <Tab tabText={'Список комнат'} tabId={'rooms-list-tab'}/>
                    <Tab tabText={'Создать комнату'} tabId={'creation-menu-tab'}/>
                </div>
                <RoomList/>
            </div>
        );
    }

}
