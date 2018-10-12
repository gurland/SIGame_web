import Form from './Form'
import SysMsg from './SysMsg'
import React, {Component} from 'react'
import Button from './Button'

import './SignForm.css'

export default class SignForm extends Component{
    constructor(props){
        super(props);
    }

    render() {
        //TODO: Make sign up form
        return (
            <div className={'sign-form'}>
                <span className={'title'} id={'si-title'}>СИ Онлайн</span>
                <Form />
                <SysMsg/>
                <div id={'reg-auth-switches'}>
                    <Button btnId={'switch-to-auth'} btnText={'Авторизация'}/>
                    <Button btnId={'switch-to-reg'} btnText={'Регистрация'}/>
                </div>
            </div>
        )
    }
}

