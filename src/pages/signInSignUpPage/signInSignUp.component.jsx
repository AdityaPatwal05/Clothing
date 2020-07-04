import React from 'react';

import './signInSignUp.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component.jsx';
import SingnUp from '../../components/sign-up/sign-up.component.jsx';

const SingInSignUp = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SingnUp />
    </div>
)

export default SingInSignUp;