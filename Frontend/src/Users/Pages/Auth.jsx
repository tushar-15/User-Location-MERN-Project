import { useState, useContext } from 'react';

import './Auth.css'
import Button from '../../Shared/Components/FormElements/Button';
import Input from '../../Shared/Components/FormElements/Input';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../Shared/Util/validators';
import { useForm } from '../../Shared/Hooks/Form-Hook';
import Card from '../../Shared/Components/UIELements/Card';
import { AuthContext } from '../../Shared/Context/auth-context';

const Auth = () =>{
    const auth= useContext(AuthContext);
    const [isLoginMode, setIsLoginMode]= useState(true);

    const [formState, inputHandler, setFormData]=useForm({
            email:{value:"", isValid: false},
            password:{value:"", isValid: false}
            },
            false
        );
    
    const authSubmitHandler = () =>{
        event.preventDefault();
        console.log(formState.inputs);
        auth.login();

    }
    const switchModeHandler = () =>{
        if(!isLoginMode){
            setFormData({
                ...formState.inputs,
                name: undefined
            }, formState.inputs.email.isValid && formState.inputs.password.isValid);
        }else{
            setFormData({
                ...formState.inputs,
                name:{ value:'' , isValid: false} 
            }, false);
        }
        setIsLoginMode(prevMode => !prevMode);
    }
 return(
    <Card className="authentication">
        <h2>Login Required</h2>
        <hr />
        <form onSubmit={authSubmitHandler}>
            {!isLoginMode && <Input element='input' type="text" id="name" label="Your Name" 
            errorText="Please enter a valid name" validators={[VALIDATOR_REQUIRE,VALIDATOR_MINLENGTH(3)]} onInput={inputHandler}/>}
            <Input element="input" type="email" id="email" label="Email" 
            errorText="Please enter valid email address"  validators={[VALIDATOR_EMAIL()]} onInput={inputHandler}/>
            <Input element="input" type="password" id="password" label="Password" 
            errorText="Password length should be greater than or minimum 8 characters" 
                validators={[VALIDATOR_MINLENGTH(8)]} onInput={inputHandler}/>
            <Button type="Submit" disabled={!formState.isValid}>{isLoginMode ? "LOGIN" : "SIGN UP"}</Button>
        </form>
        <Button inverse onClick={switchModeHandler}>{!isLoginMode ? "Existing USER? LOGIN" : "NEW USER? SIGN-UP"}</Button>
    </Card>
 )
};

export default Auth;