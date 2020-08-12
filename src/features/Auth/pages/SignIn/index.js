import React from 'react';
import PropTypes from 'prop-types';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

SignIn.propTypes = {
    
};

// Configure FirebaseUI.
const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'redirect',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    signInSuccessUrl: '/photos',
};

function SignIn(props) {
    return (
        <div>
            <div className="text-center">
                <h2>Login Form</h2>
                <p>or login with social accounts</p>
            </div>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
        </div>
    );
    // if (!this.state.isSignedIn) {
    //     return (
    //       <div>
    //         <h1>My App</h1>
    //         <p>Please sign-in:</p>
    //         <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
    //       </div>
    //     );
    //   }
    //   return (
    //     <div>
    //       <h1>My App</h1>
    //       <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
    //       <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
    //     </div>
    //   );
    
}

export default SignIn;