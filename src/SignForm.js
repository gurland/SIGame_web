import Form from './Form'
import SysMsg from './SysMsg'
import React, {Component} from 'react'

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
            </div>
        )
    }
}

