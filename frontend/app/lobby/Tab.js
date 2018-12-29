import React, { Component } from 'react'

import './Tab.css'

export default class Tab extends Component {

    render() {
        return (
                <div className={'tab'}
                     id={this.props.tabId}
                     onClick={this.props.onTabClick}>
                    <span className={'tab-title'}>{this.props.tabText}</span>
                </div>
        );
    }
}
