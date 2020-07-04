import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children, isInverted, isGoogleSignIn, ...otherProps}) => (
    <button  
        className={`
                    ${isInverted ? "inverted" : ""}
                    ${isGoogleSignIn ? "google-sign-in" : ""} 
                    custom-button`} 
        {...otherProps}
    >
        {children}
    </button>
)

export default CustomButton;