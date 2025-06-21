import './UsersList.css';
import { useState } from 'react';
import UsersItem from './UsersItem';
import Card from '../../Shared/Components/UIELements/Card';

const UsersList = props => {
    if(props.items.length ===0){
        return (
            <div className='center'>
              <Card>
                <h2>No Users Found</h2>
              </Card>
            </div>
        )
    }

    return <ul className='users-list'>
        { props.items.map(user =>{
            return <UsersItem key ={user.id} id={user.id} 
            image={user.image} name={user.name} 
            placeCount={user.places}/>
        })}
    </ul>
};

export default UsersList