import React from 'react';

import './sign-up.styles.scss';

import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils.js';

class SingnUp extends React.Component{

    constructor(){
        super();

        this.state = {
            displayName:"",
            email:"",
            password:"",
            confirmPassword:""
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert("passwords don't match");
            return;
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName:"",
                email:"",
                password:"",
                confirmPassword:""
            });

        } catch(error){
            console.log('error creating user ', error.message);
        }
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]:value});
    }

    render(){
        return(
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>

                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="text"
                        name="displayName"
                        value={this.state.displayName}
                        handleChange={this.handleChange}
                        label="Display Name"
                        required
                    />
                    <FormInput 
                        name="email" 
                        type="email" 
                        value={this.state.email} 
                        required
                        handleChange={this.handleChange}
                        label="Email" 
                    />                        
                    <FormInput 
                        name="password" 
                        type="password" 
                        value={this.state.password} 
                        required 
                        handleChange={this.handleChange} 
                        label="Password" 
                    />
                    <FormInput 
                        name="confirmPassword" 
                        type="password" 
                        value={this.state.confirmPassword} 
                        required 
                        handleChange={this.handleChange} 
                        label="confirmPassword" 
                    />
                    <CustomButton type="submit">Sign Up</CustomButton>
                </form>
            </div>
        )
    }

}

export default SingnUp;