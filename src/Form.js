import {Component} from "react";
import React from "react";
import Button from './Button'
import Input from './Input'

import './Form.css'

export default class Form extends Component{
    regBox = (
        <div id={'reg-box'}>
            <Input inputType={'text'}/>
            <Input inputType={'email'}/>
            <Input inputType={'password'}/>
        </div>
    );

    authBox = (
        <div id={'auth-box'}>
            <Input inputType={'text'}/>
            <Input inputType={'password'}/>
        </div>
    );

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={'reg-auth-form'}>
                {'reg' === !this.props.formType ? this.authBox : this.regBox}
                <Button btnText={
                            'reg' === !this.props.formType ? 'Войти' : 'Зарегистрироваться'
                        }/>
            </div>
        )
    }


}

