import React, { Component } from 'react'

import Button from '../../Button'
import Room from './Room'
import './RoomList.css'

export default class RoomList extends Component{
    constructor(props){
        super(props);

        this.handleRoomClick = this.handleRoomClick.bind(this);
        // this.currentSelectedElementId = 0;
        // this.selectedRoomsList = [];

        this.state = {
            selectedRoom: 0
        };
    }

    handleRoomClick(e){
        console.log(e.target.getAttribute('id'));
        // this.selectedRoomsList.push(id);
        this.setState({selectedRooms: e.currentTarget.dataset.id})
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
                        <Room roomClass={this.state.selectedRoom === this.id ? 'room selected' : 'room'}
                              roomId={'1'}
                              onRoomClick={(e) => (this.handleRoomClick(e))}/>
                        <Room roomClass={this.state.selectedRoom === this.id ? 'room selected' : 'room'}
                              roomId={'2'}
                              onRoomClick={(e) => (this.handleRoomClick(e))}/>
                        <Room roomClass={this.state.selectedRoom === this.id ? 'room selected' : 'room'}
                              roomId={'3'}
                              onRoomClick={(e) => (this.handleRoomClick(e))}/>
                        <Room roomClass={this.state.selectedRoom === this.id ? 'room selected' : 'room'}
                              roomId={'4'}
                              onRoomClick={(e) => (this.handleRoomClick(e))}/>
                        <Room roomClass={this.state.selectedRoom === this.id ? 'room selected' : 'room'}
                              roomId={'5'}
                              onRoomClick={(e) => (this.handleRoomClick(e))}/>
                        <Room roomClass={this.state.selectedRoom === this.id ? 'room selected' : 'room'}
                              roomId={'6'}
                              onRoomClick={(e) => (this.handleRoomClick(e))}/>
                        <Room roomClass={this.state.selectedRoom === this.id ? 'room selected' : 'room'}
                              roomId={'7'}
                              onRoomClick={(e) => (this.handleRoomClick(e))}/>
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