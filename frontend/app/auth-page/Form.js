import {Component} from "react";
import React from "react";
import Button from '../Button'
import Input from '../Input'

import './Form.css'

export default class Form extends Component{
    regBox = (
        <div id={'reg-box'}>
            <Input inputType={'text'}
                   inputText={'Логин'}/>

            <Input inputType={'email'}
                   inputText={'Электронный адрес'}/>

            <Input inputType={'password'}
                   inputText={'Пароль'}/>
        </div>
    );

    authBox = (
        <div id={'auth-box'}>
            <Input inputType={'text'}
                   inputText={'Логин'}/>

            <Input inputType={'password'}
                   inputText={'Пароль'}/>
        </div>
    );

    render() {
        return(
            <div className={'reg-auth-form'}>
                {this.props.formType === 'auth' ? this.authBox : this.regBox}
                <Button btnText={
                            this.props.formType === 'auth' ? 'Войти' : 'Зарегистрироваться'
                        }/>
            </div>
        )
    }


}

