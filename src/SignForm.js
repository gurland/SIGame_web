import {Input, Button, SysMsg} from './InterfaceElements'
import Form from './Form'
import React, {Component} from 'react'

export default class SignForm extends Component{
    constructor(props){
        super(props);
    }

    render() {
        //TODO: Make sign up form
        return (
            <div className={'sign-form'}>
                <span className={'title'} id={'si-title'}>СИ Онлайн</span>
                <span className={'title'} id={'form-title'}>Регистрация</span>

                <Form/>
            </div>
        )
    }
}

