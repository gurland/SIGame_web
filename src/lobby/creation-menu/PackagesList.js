import React, {Component} from 'react'

import './PackagesList.css'
import Button from "../../Button";

export default class PackagesList extends Component{


    render() {
        return (
            <div id={'package-list-block'}>
                <div className={'section-title'}>
                    <span>Доступные пакеты</span>
                </div>
                <div id="package-list-list">

                </div>
                <Button id={'choose-package-button'} btnText={'Выбрать пакет'}/>

            </div>
        );
    }
}