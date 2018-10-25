import React, { Component } from 'react'

import './ChatBlockTabs.css'

export default class ChatBlockTabs extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div id={'chat-block-tabs'}>
                <div className={'tab'} id={'chat-tab'}>
                    <span className={'tab-title'}>Чат</span>
                </div>
                <div className={'tab'} id={'profile-tab'}>
                    <span className={'tab-title'}>Профиль</span>
                </div>
            </div>
        );
    }
}
