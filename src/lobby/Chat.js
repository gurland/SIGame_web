import React, { Component } from 'react'

import Button from '../Button'
import './Chat.css'

export default class Chat extends Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div id={'chat'}>
                <div className={'chat-element'} id={'messages'}>

                </div>
                <div className={'chat-element'} id="message-field">
                    <input type="text"/>
                </div>
                <div className={'chat-element'} id="send-msg-button">
                    <Button btnText={'Отправить'}/>
                </div>
            </div>
        );
    }

}