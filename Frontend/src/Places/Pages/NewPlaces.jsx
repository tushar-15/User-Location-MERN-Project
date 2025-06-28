import { useCallback, useReducer } from 'react';

import './PlaceForm.css';
import Input from '../../Shared/Components/FormElements/Input';
import {VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from "../../Shared/Util/validators"
import Button from '../../Shared/Components/FormElements/Button';
import { useForm } from '../../Shared/Hooks/Form-Hook';

//moved to custom form-hook
// const formReducer= (state, action)=>{
//     switch(action.type){
//         case 'INPUT_CHANGE':
//             let formIsValid=true;
//             for(const inputId in state.inputs){
//                 if(inputId===action.inputId){
//                     formIsValid =formIsValid && action.isValid;
//                 }else{
//                     formIsValid =formIsValid && state.inputs[inputId].isValid;
//                 }
//             }
//             return {
//                 ...state,
//                 inputs:{
//                     ...state.inputs,
//                     [action.inputId]: {value: action.value, isValid: action.isValid}
//                 },
//                 isValid: formIsValid
//             };
//         default:
//             return state;

//     }
// };

const NewPlaces = () =>{
    const [formState, inputHandler]=useForm({
        title:{value:"", isValid: false},
        description:{value:"", isValid: false},
        address:{value:"", isValid: false}
        },
        false
    );

    //moved to custom form-hook
    // const [formState,dispatch ]=useReducer(formReducer, {
    //     inputs:{
    //         title:{value:"", isValid: false},
    //         description:{value:"", isValid: false},
    //         address:{value:"", isValid: false}
    //     },
    //     isValid:false
    // });


    // const inputHandler= useCallback((id, value, isValid) =>{
    //     dispatch({type: 'INPUT_CHANGE', value: value, isValid:isValid, inputId:id})
    // },[]);

    const placeSubmitHandler = event =>{
        event.preventDefault();
        console.log(formState.inputs);   //later will send this to backend
    }

    // const descInputHandler= useCallback((id, value, isValid) =>{    },[]);

    // without using the useCallback the function will exexute entire code and goes to infinite loop

    return (
        <form className="place-form" onSubmit={placeSubmitHandler}>
            <Input element= "input" id= "title" type="text" 
                label="Title" placeholder="Enter Place Name"
                validators= {[VALIDATOR_REQUIRE()]} errorText= "Please enter a valid Title"
                onInput={inputHandler}
            />
            <Input element= "textarea" id= "description" validators= {[VALIDATOR_MINLENGTH(5)]} 
            errorText= "Please enter a valid description (at least 5 characters)"
            label="Description" placeholder="Enter Place Description"
            onInput={inputHandler}/>
            <Input element= "input" type="text" id="address" validators= {[VALIDATOR_REQUIRE()]} 
            errorText= "Please enter a valid address. "
            label="Description" placeholder="Enter Place Address"
            onInput={inputHandler}/>    
            {/* resubale  inputHandler function helps us to without creating modifyiing the functionaloity*/}
             
            <Button type="Submit" disabled={!formState.isValid} >ADD PLACE </Button>
        </form>
    )
}

export default NewPlaces;