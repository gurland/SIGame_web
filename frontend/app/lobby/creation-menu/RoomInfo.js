import React, {Component} from 'react'

import './RoomInfo.css'

export default class RoomInfo extends Component{

    static copyLink(){
        const textToCopy = document.getElementById('link');
        textToCopy.select();
        document.execCommand('copy');
    }

    render() {
        return (
            <div id={'room-info'}>
                <span className={'section-title'}>Создание комнаты</span>
                <input type="text" id={'new-room-name'} placeholder={'Название комнаты'}/>
                <input type="text" id={'new-room-password'} placeholder={'Пароль'}/>
                <span>Ссылка на комнату</span>
                <input type="text"
                       id={'link'}
                       value={'si.com/game?join=hUH82ki6ST'}
                       onClick={RoomInfo.copyLink}/>
            </div>
        );
    }
}