import React, {Component} from 'react'

import Package from './Package'
import './PackageUploader.css'
import Button from "../../Button";

export default class PackageUploader extends Component{
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
            <form action="" className={'profile-element'} id={'upload-package'}>
                <div id={'package-info'}>
                    <input type="text" id={'package-name'} placeholder={'Имя пакета'}/>
                    <input type="file" id={'choose-file'} accept={'.siq'}/>
                </div>
                <Button btnClass={'form-element'} btnId={'upload-package-btn'} btnText={'Загрузить пакет'}/>
            </form>
        );
    }
}