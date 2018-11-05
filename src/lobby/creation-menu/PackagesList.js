import React, {Component} from 'react'

import Package from './Package'
import './PackagesList.css'

export default class PackagesList extends Component{
    constructor(props) {
        super(props);

        this.state = {
            selectedPackageId: 0

        };

        this.handlePackageClick = this.handlePackageClick.bind(this);
    }

    handlePackageClick(id){
        this.setState({
            selectedPackageId: id
        });
    }

    render() {
        return (
            <div id={'package-list-block'}>
                <div className={'section-title'}>
                    <span>Доступные пакеты</span>
                </div>
                <div id="package-list">
                    <Package selectedPackageId={this.state.selectedPackageId} onPackageClick={(e) => (this.handlePackageClick(e.target.id))} packageId={'1'} packageName={'Аниме пафівфвфвкет'}/>
                    <Package selectedPackageId={this.state.selectedPackageId} onPackageClick={(e) => (this.handlePackageClick(e.target.id))} packageId={'2'} packageName={'Аниме пафівфвфівфівфікет'}/>
                    <Package selectedPackageId={this.state.selectedPackageId} onPackageClick={(e) => (this.handlePackageClick(e.target.id))} packageId={'3'} packageName={'Аниме пакфівфвфіветasasasaasdadadd'}/>
                    <Package selectedPackageId={this.state.selectedPackageId} onPackageClick={(e) => (this.handlePackageClick(e.target.id))} packageId={'4'} packageName={'Аниме adasdassddasdіваіваіваівааіва'}/>
                    <Package selectedPackageId={this.state.selectedPackageId} onPackageClick={(e) => (this.handlePackageClick(e.target.id))} packageId={'5'} packageName={'Аниме пафічфasdadasdasdфвфвівічкет'}/>
                    <Package selectedPackageId={this.state.selectedPackageId} onPackageClick={(e) => (this.handlePackageClick(e.target.id))} packageId={'6'} packageName={'Аниме пакічфчфчіет'}/>
                    <Package selectedPackageId={this.state.selectedPackageId} onPackageClick={(e) => (this.handlePackageClick(e.target.id))} packageId={'7'} packageName={'Аниме пакеясячсівсччт'}/>
                    <Package selectedPackageId={this.state.selectedPackageId} onPackageClick={(e) => (this.handlePackageClick(e.target.id))} packageId={'8'} packageName={'Аниме пакевфівфвфвіфвіфівт'}/>
                    <Package selectedPackageId={this.state.selectedPackageId} onPackageClick={(e) => (this.handlePackageClick(e.target.id))} packageId={'9'} packageName={'Аниме пакфіефівфівфівт'}/>
                    <Package selectedPackageId={this.state.selectedPackageId} onPackageClick={(e) => (this.handlePackageClick(e.target.id))} packageId={'10'} packageName={'Аниме пачкчфівфвфвіфет'}/>
                </div>
            </div>
        );
    }
}