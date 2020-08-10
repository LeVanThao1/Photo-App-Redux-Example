import React from 'react';
import PropTypes from 'prop-types';
// import Banner from '../../../../components/Banner/Banner';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import Banner from 'components/Banner/Banner';
import { useSelector } from 'react-redux';
import PhotoList from 'features/Photo/components/PhotoList';

MainPage.propTypes = {
    
};

function MainPage(props) {
    const photos = useSelector(state => state.photos);

    const handleEditClick = (photo) => {
        console.log(photo)
    }

    const handleRemoveClick = (photo) => {
        console.log(photo)
        const action = removePhoto(photo.id)
    }

    return (
        <div className="photo-main">
            <Banner title="Home Page" backgroundUrl="https://pbs.twimg.com/profile_images/684200142245904384/a124QTD5_400x400.jpg"></Banner>
            <Container className="text-center">
                <Link to="/photos/add">Add new photo</Link>  
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