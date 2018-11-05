import React, {Component} from 'react'

import './Package.css'

export default class Package extends Component{

    render() {
        return (
            <li className={`package ${this.props.packageId === this.props.selectedPackageId ? 'selected' : null}`}
                id={this.props.packageId}
                onClick={this.props.onPackageClick}
            >
                {this.props.packageName}
            </li>
        );
    }

}