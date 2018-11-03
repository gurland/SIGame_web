import React, { Component } from 'react'

import Room from './Room'
import './RoomList.css'

export default class RoomList extends Component{

    render() {
        return (
            <div id={'rooms'}>
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
                        <Room roomId={'1'} roomLink={'room-link-here'}/>
                        <Room roomId={'2'} roomLink={'room-link-here'}/>
                        <Room roomId={'3'} roomLink={'room-link-here'}/>
                        <Room roomId={'4'} roomLink={'room-link-here'}/>
                        <Room roomId={'5'} roomLink={'room-link-here'}/>
                        <Room roomId={'6'} roomLink={'room-link-here'}/>
                        <Room roomId={'7'} roomLink={'room-link-here'}/>
                        <Room roomId={'8'} roomLink={'room-link-here'}/>
                        <Room roomId={'9'} roomLink={'room-link-here'}/>
                        <Room roomId={'10'} roomLink={'room-link-here'}/>
                    </ul>
                </div>
            </div>
        );
    }
}