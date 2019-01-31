import React, {Component} from 'react'

import RoomInfo from './RoomInfo'
import PlayersList from './PlayersList'
import PackageUploader from './PackageUploader'
import Button from '../../Button'
import './CreationMenu.css'

export default class CreationMenu extends Component{
    render() {
        return (
            <div id={'creation-menu'}>
                <div id={'dividers-block'}>
                    <div className={'menu-divider'} id={'left-divider'}>
                        <RoomInfo/>
                    </div>
                    <div className={'menu-divider'} id={'right-divider'}>
                        <PlayersList/>
                        <PackageUploader/>
                    </div>
                </div>
                <Button id={'start-game-button'} btnText={'Запустить игру'}/>
            </div>
        );
    }
}