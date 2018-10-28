import React, { Component } from 'react'

import './Tab.css'

export default class Tab extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
                <div className={'tab'} id={this.props.tabId}>
                    <span className={'tab-title'}>{this.props.tabText}</span>
                </div>
        );
    }
}
