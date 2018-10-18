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
                            <td className={'column-heading'}>Название комнаты</td>
                            <td className={'column-heading'}>Название пакета</td>
                            <td className={'column-heading'}>Количество игроков</td>
                        </tr>
                    </table>
                </div>
                <div id={'rooms-list'}>
                    <ul>
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