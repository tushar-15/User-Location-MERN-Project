import { } from 'react';
import { Link } from 'react-router-dom';

import './PlaceList.css'
import PlaceItem from './PlaceItem';
import Card from '../../Shared/Components/UIELements/Card';
import Button from '../../Shared/Components/FormElements/Button';

const PlaceList = props =>{
    if(props.items.length==0){
        return (<div className='place-list center'>
            <Card>
                <h3>No Places Found. Maybe Create new one?</h3>
                <Button to ="/place/new" inverse>Share Place</Button>
            </Card>
            </div>
        );
    }

    return (<ul className='place-list'>
        {props.items.map(place => 
            <PlaceItem key={place.id} id={place.id} 
            title={place.title} image={place.ImageUrl}  
            description={place.description} address= {place.address}
            creatorId ={place.creator} coordinates={place.location}/>
        )}
    </ul>)
};

export default PlaceList
