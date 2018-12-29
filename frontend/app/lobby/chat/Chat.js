import React, { Component } from 'react'

import './Chat.css'

export default class Chat extends Component{

    render() {
        return (
            <div id={'chat'}>
                <div className={'chat-element'} id={'messages'}>

                </div>
                <form action="" className={'chat-element'} id="message-field">
                    <input type="text"/>
                </form>
            </div>
        );
    }

}