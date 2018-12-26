import React, {Component} from 'react'

import './PackageUploader.css'


export default class PackageUploader extends Component{
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(){
        let input = document.getElementById('choose-file');
        let fileName = input.value.split('\\').pop();
        let chosenFileName = document.getElementById('chosen-package-name');

        chosenFileName.innerHTML = fileName;
    }

    render() {
        return (
            <form action="" className={'profile-element'} id={'upload-package'}>
                <div id={'package-info'}>
                    <input
                        type="file"
                        id={'choose-file'}
                        accept={'.siq'}
                        onChange={this.handleChange}/>
                </div>
                <label
                    htmlFor="choose-file"
                    id={'upload-package-btn'}>Выбрать пакет</label>
                <span id={'chosen-package-name'}>Вы не выбрали пакет.</span>
            </form>
        );
    }
}