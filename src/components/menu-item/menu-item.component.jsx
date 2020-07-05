import React from 'react';
import {withRouter} from 'react-router-dom';

import './menu-item.styles.scss'

const MenuItem = ({title, imageUrl, size, history}) => (
    <div className = {`${size} menu-item`}>
        <div 
            className = 'background-image'
            style= {{backgroundImage: `url(${imageUrl})`}}
        />
        <div className = 'content' onClick={() => (history.push('/shop'))}>
            <h1 className = 'title'>{title}</h1>
            <div className = 'subtitle'>SHOP NOW</div>
        </div>
    </div>
)

export default withRouter(MenuItem);