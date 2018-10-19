import React, { Component } from 'react'

import Button from '../Button'
import Room from './Room'
import './RoomList.css'

export default class RoomList extends Component{
    constructor(props){
        super(props);

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
                        <Room/>
                        <Room/>
                        <Room/>
                        <Room/>
                    </ul>
                </div>
                <div id={'buttons'}>
                    <Button btnText={'Войти в комнату'}/>
                    <Button btnText={'Создать комнату'}/>
                </div>
            </div>
        );
    }
}