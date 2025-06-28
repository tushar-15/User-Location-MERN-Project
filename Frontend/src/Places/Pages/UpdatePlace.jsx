import { useCallback, useReducer , useEffect, useState} from 'react';
import { useParams } from "react-router-dom";

import Input from "../../Shared/Components/FormElements/Input";
import Button from "../../Shared/Components/FormElements/Button";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../../Shared/Util/validators";
import './PlaceForm.css';
import { useForm } from '../../Shared/Hooks/Form-Hook';
import Card from '../../Shared/Components/UIELements/Card';

const dummyPlaces=[
    {id:'p1', title:'INDIA GATE', description:'Delhi', 
        ImageUrl:'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nprcUC7C4ul_IkZAdb71b_s9dxCPiFogicStHHsKxRdZB2NmK8wGK2_idwc-2gbVfX3ekoj7aaqYm3I-RvVfHzg3dCnrQxXJ_Uw37gNCeL5O-Erv2diZN4QG0GhcMe7nUokE0R3=w408-h510-k-no',
        Address:"Delhi India", location: { lat: 28.612912, lng:77.2269348},
        creator: 'u1'    
    },
    {id:'p2', title:'HAWAMAHAL', description:'Jaipur', 
        ImageUrl:'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrIg_7iAKB021YU3Yf2swZYam2HCyf2O9vJ4OMCgJzeE2P02reFQQpaDpSVbwEme8bZ_vbvN3AJ-lX5YQZ0_IyfIxkcFl5NuH814mZyNtlY84HRNZ76jBNzD8Iq-IqpyIKF5h0K=w408-h306-k-no', 
        Address:"Jaipur Rajasthan, India", location: { lat: 26.9240506, lng:75.8241395}, 
        creator: 'u2'}
];

const UpdatePlace = props =>{
    const [isLoading, setIsLoading] = useState(true);
    const placeId =useParams().placeId;

    // const [formState, inputHandler]=useForm({
    //     title:{value:identifiedPlace.title, isValid: true},
    //     description:{value:identifiedPlace.description, isValid: true},
    //     },
    //     true
    // );
     

    const [formState, inputHandler,setFormData]=useForm({
        title:{value:'', isValid: false},
        description:{value:'', isValid: false},
        },
        false
    );

    const identifiedPlace =dummyPlaces.find(p => p.id===placeId);
    useEffect(()=>{
        if (identifiedPlace) {
            setFormData({
                title: {  value: identifiedPlace.title,  isValid: true },
                description: {  value: identifiedPlace.description,  isValid: true    }
            },
              true
            )};
        setIsLoading(false);
        }, [setFormData, identifiedPlace]);

    const placeEventUpdateHandler =event => {
        event.preventDefault();
        console.log(formState.inputs);
    }


    if(!identifiedPlace){
        return( 
        <div className="center">
            <Card>
              <h2>Could not find place!</h2>
            </Card>
        </div>
        );
    }
    return( formState.inputs.title.value &&
        <form className='place-form' onSubmit={placeEventUpdateHandler}>
            <Input id='title' element='input' type='text' label='Title' validators={[VALIDATOR_REQUIRE()]}
            errorText="Title can not be empty" initialValue={formState.inputs.title.value} initialValid={formState.inputs.title.isValid}
            onInput={inputHandler} />

            <Input id='description' element='textarea' label='Description' validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Description Cann't be less than 5 character" initialValue={formState.inputs.description.value} 
            initialValid={formState.inputs.description.isValid}  onInput={inputHandler}
            />
            <Button type="Submit" disabled={!formState.isValid}>Update Place</Button>
        </form>
    );
};

export default UpdatePlace;