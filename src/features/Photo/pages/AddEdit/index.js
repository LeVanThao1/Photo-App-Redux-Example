import React from 'react';
import PropTypes from 'prop-types';
// import Banner from '../../../../components/Banner/Banner';
// import PhotoForm from '../../../../components/PhotoForm/PhotoForm';
import './style.scss'
import Banner from 'components/Banner/Banner';
import PhotoForm from 'components/PhotoForm/PhotoForm';
import { useDispatch, useSelector } from 'react-redux';
import { addPhoto, updatePhoto } from 'features/Photo/photoSlice';
import { useHistory, useParams } from 'react-router-dom';

AddEditPage.propTypes = {
    
};

function AddEditPage(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const { photoId } = useParams();
    const editPhoto = useSelector(state => state.photos.find(photo=> photo.id === photoId));

    const isAddMode = !photoId;

    const initialValues = isAddMode? {
        title: '',
        categoryId: null,
        photo: ''
    } : {
        title: editPhoto.title,
        categoryId: editPhoto.categoryId,
        photo: editPhoto.photo
    }

    const handleSubmit = (values) => {
        setTimeout(() => {
            if(isAddMode) {
                const action = addPhoto(values);
                dispatch(action);
            }
            else {
                const newPhoto = {...editPhoto, ...values}
                const action = updatePhoto(newPhoto);
                dispatch(action);
            }
            history.push('/photos')
        },2000)
    }

    return (
        <div className="photo-add-edit">
            <Banner title="Home Page" backgroundUrl="https://pbs.twimg.com/profile_images/684200142245904384/a124QTD5_400x400.jpg"></Banner>

            <PhotoForm 
                initialValues={initialValues}
                onSubmit={handleSubmit}
                isAddMode={isAddMode}
            />
        </div>
    );
}

export default AddEditPage;