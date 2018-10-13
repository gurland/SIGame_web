import Form from './Form'
import SysMsg from './SysMsg'
import React, {Component} from 'react'
import Button from './Button'

import './SignForm.css'
import Input from "./Input";

export default class SignForm extends Component{
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

    constructor(props){
        super(props);

        this.state = {beingShowedNow: 'auth'};
        this.showAuthBox = this.showAuthBox.bind(this);
        this.showRegBox = this.showRegBox.bind(this);
    }

    showAuthBox(){
        if ('auth' !== this.state.beingShowedNow) {
            this.setState(() => ({
                beingShowedNow: 'auth'
            }));
        }
    }

    showRegBox(){
        if ('reg' !== this.state.beingShowedNow) {
            this.setState(() => ({
                beingShowedNow: 'reg'
            }));
        }
    }

    render() {
        //TODO: Make sign up form
        return (
            <div className={'sign-form'}>
                <span className={'title'} id={'si-title'}>СИ Онлайн</span>
                {<Form formType={this.state.beingShowedNow}/>}
                <SysMsg/>
                <div id={'reg-auth-switches'}>
                    <Button btnId={'switch-to-auth'}
                            btnText={'Авторизация'}
                            onBtnClick={this.showAuthBox}/>
                    <Button btnId={'switch-to-reg'}
                            btnText={'Регистрация'}
                            onBtnClick={this.showRegBox}/>
                </div>
            </div>
        )
    }
}

