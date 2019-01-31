import React, {Component} from 'react'

import Player from './Player'
import Button from '../../Button'
import './PlayersList.css'

export default class PlayersList extends Component{


    render() {
        return (
            <div id={'player-list-block'}>
                <div className={'section-title'}>
                    <span>Игроки</span>
                </div>
                <div id="players-list">
                    <ul>
                        <Player playerId={'vasya-lol'}
                                playerType={'human'}
                                playerName={'user-login-223813e13e'}/>
                        <Player playerId={'vasya-lol'}
                                playerType={'bot'}
                                playerName={'user-login-223813e13e'}/>
                    </ul>
                </div>
                <Button id={'add-bot-button'} btnText={'Добавить бота'}/>
            </div>
        );
    }
}