import React, {Component} from 'react'

import './LoadPopup.css'

export default class LoadPopup extends Component{

    render() {
        return (
            <div className={this.props.popupClass}
                 id="load-avatar-button">
                <div>
                    <span style={this.props.popupStyle}>
                        <input type="file" accept={'.jpeg, .jpg, .png, .bmp'}/>
                        Загрузить
                    </span>
                </div>
            </div>
        );
    }

}