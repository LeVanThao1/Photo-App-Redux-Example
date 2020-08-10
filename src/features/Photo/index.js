import React from 'react';
import PropTypes from 'prop-types';
import { Switch, useRouteMatch, Route } from 'react-router-dom';
import MainPage from './pages/Main';
import AddEditPage from './pages/AddEdit';
import NotFound from 'components/NotFound/NotFound';
// import NotFound from '../../components/NotFound/NotFound';

Photo.propTypes = {
    
};

function Photo(props) {
    const match = useRouteMatch();
    console.log(match);

    return (
        <Switch>
            <Route exact path={match.url} component={MainPage}/>

            <Route exact path={`${match.url}/add`} component={AddEditPage}/>
            <Route exact path={`${match.url}/:photoId`} component={AddEditPage}/>

            <Route component={NotFound}/>
        </Switch>
    );
}

export default Photo;