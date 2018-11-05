import React, {Component} from 'react'

import './Package.css'

export default class Package extends Component{
    constructor(props) {
        super(props);

        this.state = {
            isSelected: false
        };

        this.handlePackageClick = this.handlePackageClick.bind(this);
    }

    handlePackageClick(){
        this.setState({
            isSelected: !this.state.isSelected
        });
    }

    render() {
        return (
            <li className={`package ${this.state.isSelected ? 'selected' : null}`}
                id={this.props.packageId}
                onClick={this.handlePackageClick}>
                {this.props.packageName}
            </li>
        );
    }

}