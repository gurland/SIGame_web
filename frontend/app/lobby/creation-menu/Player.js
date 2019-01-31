import React, {Component} from 'react'

import './Player.css'

export default class Player extends Component{

    render() {
        return (
            <li className={'player'} id={this.props.playerId}>
                {this.props.playerType === 'human'
                    ? <i className="player-type fas fa-user-circle"/>
                    : <i className="fas fa-robot"/>}
                <span id={'user-login'}>{this.props.playerName}</span>
            </li>
        );
    }
}