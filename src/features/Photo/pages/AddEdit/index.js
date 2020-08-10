import React from 'react';
import PropTypes from 'prop-types';
// import Banner from '../../../../components/Banner/Banner';
// import PhotoForm from '../../../../components/PhotoForm/PhotoForm';
import './style.scss'
import Banner from 'components/Banner/Banner';
import PhotoForm from 'components/PhotoForm/PhotoForm';
import { useDispatch } from 'react-redux';
import { addPhoto } from 'features/Photo/photoSlice';
import { useHistory } from 'react-router-dom';

AddEditPage.propTypes = {
    
};

function AddEditPage(props) {
    
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (values) => {
        setTimeout(() => {
            console.log(values);
        const action = addPhoto(values);
        dispatch(action);
        history.push('/photos')
        },2000)
    }
    return (
        <div className="photo-add-edit">
            <Banner title="Home Page" backgroundUrl="https://pbs.twimg.com/profile_images/684200142245904384/a124QTD5_400x400.jpg"></Banner>

            <PhotoForm onSubmit={handleSubmit} />
        </div>
    );
}

export default AddEditPage;