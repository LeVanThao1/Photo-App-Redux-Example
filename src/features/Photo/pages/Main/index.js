import React from 'react';
import PropTypes from 'prop-types';
// import Banner from '../../../../components/Banner/Banner';
import { Container } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import Banner from 'components/Banner/Banner';
import { useSelector, useDispatch } from 'react-redux';
import PhotoList from 'features/Photo/components/PhotoList';
import { removePhoto } from 'features/Photo/photoSlice';

MainPage.propTypes = {
    
};

function MainPage(props) {
    const photos = useSelector(state => state.photos);
    const dispatch = useDispatch();
    const history = useHistory()

    const handleEditClick = (photo) => {
        history.push(`/photos/${photo.id}`)
    }

    const handleRemoveClick = (photo) => {
        console.log(photo)
        const action = removePhoto(photo.id)
        dispatch(action)
    }   

    return (
        <div className="photo-main">
            <Banner title="🎉 Your awesome photos 🎉" backgroundUrl="https://pbs.twimg.com/profile_images/684200142245904384/a124QTD5_400x400.jpg"></Banner>
            <Container className="text-center">
                <div className="py-3">
                    <Link to="/photos/add">Add new photo</Link>
                </div>  
                <PhotoList
                    photoList = {photos}
                    onPhotoEditClick = {handleEditClick}
                    onPhotoRemoveClick = {handleRemoveClick}
                />              
            </Container>
        </div>
    );
}

export default MainPage;