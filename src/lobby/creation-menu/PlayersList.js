import React, {Component} from 'react'

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

                </div>
                <Button id={'add-bot-button'} btnText={'Добавить бота'}/>
            </div>
        );
    }
}