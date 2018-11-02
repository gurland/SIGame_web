import React, { Component } from 'react'

import Button from '../Button'
import Room from './Room'
import './RoomList.css'

export default class RoomList extends Component{
    constructor(props){
        super(props);

        this.handleRoomClick = this.handleRoomClick.bind(this);
        this.currentSelectedElementId = 0;
    }

    handleRoomClick(e, id){
        let currentSelectedElement = document.getElementById(this.currentSelectedElementId);

        if (currentSelectedElement){
            currentSelectedElement.className = 'room';
            console.log(currentSelectedElement);
        } else {
            // console.log(e.target.id);
        }

        currentSelectedElement = document.getElementById(id);
        console.log(id);
        console.log(e);
        // currentSelectedElement.className = 'room selected';
    }

    render() {
        return (
            <div className={'main-menu-element'} id={'rooms'}>
                <div id={'header'}>
                    <span className={'block-title'} id={'room-list-title'}>
                        Игровые комнаты
                    </span>
                </div>
                <div className={'column-headings-block'}>
                    <table>
                        <tr>
                            <td className={'column-heading'} id={'is-room-locked'}/>
                            <td className={'column-heading'} id={'room-name-heading'}><span>Название комнаты</span></td>
                            <td className={'column-heading'} id={'package-name-headings'}><span>Название пакета</span></td>
                            <td className={'column-heading'} id={'players-amount-heading'}><span>Количество игроков</span></td>
                        </tr>
                    </table>
                </div>
                <div id={'rooms-list'}>
                    <ul>
                        <Room roomId={'1'} onRoomClick={e => this.handleRoomClick(e, this.id)}/>
                        <Room roomId={'2'} onRoomClick={e => this.handleRoomClick(e, this.id)}/>
                        <Room roomId={'3'} onRoomClick={e => this.handleRoomClick(e, this.id)}/>
                        <Room roomId={'4'} onRoomClick={e => this.handleRoomClick(e, this.id)}/>
                        <Room roomId={'5'} onRoomClick={e => this.handleRoomClick(e, this.id)}/>
                        <Room roomId={'6'} onRoomClick={e => this.handleRoomClick(e, this.id)}/>
                        <Room roomId={'7'} onRoomClick={e => this.handleRoomClick(e, this.id)}/>
                    </ul>
                </div>
                <div id={'buttons'}>
                    <Button btnText={'Войти в комнату'} isDisabled={true}/>
                    <Button btnText={'Создать комнату'} isDisabled={true}/>
                </div>
            </div>
        );
    }
}