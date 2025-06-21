import { useParams } from 'react-router-dom';

import './UserPlaces.css'
import PlaceList from '../Components/PlaceList';

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
    ]

const UserPlaces = () =>{
    const userId=useParams().userId;
    const loadedPlaces= dummyPlaces.filter(place => place.creator===userId)
    return <PlaceList items={loadedPlaces}/>
};

export default UserPlaces;
