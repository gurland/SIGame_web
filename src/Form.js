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

        this.state = {showAuthBox: true};
        this._onButtonClick = this._onButtonClick.bind(this);
    }

    _onButtonClick(){
        this.setState(() => ({
            showAuthBox: !(this.state.showAuthBox)
        }));
    }

    render() {
        return(
            <div className={'reg-auth-form'}>
                {this.state.showAuthBox ? this.authBox : this.regBox}
                <Button
                    btnText={
                        this.state.showAuthBox ? 'Войти' : 'Регистрация'
                    }
                    onBtnClick={
                        this._onButtonClick
                    }
                />
            </div>
        )
    }


}

