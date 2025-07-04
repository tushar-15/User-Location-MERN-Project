import { useState, useContext } from 'react';

import Card from '../../Shared/Components/UIELements/Card';
import Button from '../../Shared/Components/FormElements/Button';
import Modal from '../../Shared/Components/UIELements/Modal.JSX';
import Map from '../../Shared/Components/UIELements/Map';
import './PlaceItem.css'
import { AuthContext } from '../../Shared/Context/auth-context';

const PlaceItem = props =>{
    const auth= useContext(AuthContext);
    const [showMap , setShowMap]= useState(false);
    const [showConfirmModal, setShowConfirmModal]= useState(false);

    const openMapHandler=()=>{    setShowMap(true);}
    const closeMapHandler=()=>{   setShowMap(false);}

    const showDeleteWarningHandler= ()=>{
        setShowConfirmModal(true);
    } 

    const cancelDeleteHandler = ()=>{
        setShowConfirmModal(false);
    }

    const confirmDeleteHandler = () => {
        console.log("Deleted "+ props);
        setShowConfirmModal(false);
    }

    return (
        <>
        <Modal show={showMap} onCancel={closeMapHandler} 
            header={props.address}
            contentClass="place-item__modal-content"
            footerClass="place-item__modal-actions"
            footer={<Button onClick={closeMapHandler}>CLOSE</Button>}>
            <div className='map-container'>
                <Map center={props.coordinates} zoom={16} />
            </div>
        </Modal>

        <Modal show={showConfirmModal} 
            onCancel={cancelDeleteHandler} header="Are you sure?" footerClass="place-item__modal-actions" footer={
            <>
              <Button inverse onClick={cancelDeleteHandler}>CANCEL</Button>
              <Button danger onClick={confirmDeleteHandler}>DELETE</Button>
            </>
        }>
            <p>Do you want to delete this place? Please note that it can't undone after</p>
        </Modal>
        <li className='place-item'>
            <Card className="place-item__content">
                <div className='place-item__image'>
                    <img src={props.image} alt={props.title}/>
                </div>
                <div className='place-item__info'>
                    <h2>{props.title}</h2>
                    <h3>{props.address}</h3>
                    <p> {props.description}</p>
                </div>
                <div className='place-item__actions'>
                    <Button inverse onClick={openMapHandler} > View On Map</Button>
                    {auth.isLoggedIn && <Button to={`/place/${props.id}`}> Edit Place</Button>}
                    {auth.isLoggedIn && <Button danger onClick={showDeleteWarningHandler}> Delete Place</Button>}
                </div>
            </Card>
        </li>
    </>
    )
};

export default PlaceItem
