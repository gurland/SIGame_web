import React, { Component } from 'react'

import Button from '../../Button'
import Avatar from './Avatar'
import './UserProfile.css'

export default class UserProfile extends Component{
    render() {
        return (
            <div id={'profile'}>
                <Avatar/>
                <div className={'profile-element'} id="user-login">
                    <span>User Name XXX</span>
                </div>
                <form action=""  className={'profile-element'} id={'change-password'}>
                    <input className={'form-element'} id={'current-pass'} type="password" placeholder={'Текущий пароль'}/>
                    <input className={'form-element'} id={'new-pass'} type="password" placeholder={'Новый пароль'}/>
                    <Button btnClass={'form-element'} btnId={'change-pass-btn'} btnText={'Сменить пароль'}/>
                </form>
            </div>
        );
    }

}