import React, {useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router';
import './Login.css';
import { useDispatch, useSelector } from 'react-redux';
import { addLoggedInUser } from '../../redux/actions/productActions';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const Login = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  console.log(loggedInUser);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const handleGoogleSignIn = () => {
    var googleProvider = new firebase.auth.GoogleAuthProvider();

    firebase.auth()
      .signInWithPopup(googleProvider)
      .then((result) => {


        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
        storeAuthToken();
        history.replace(from);
        addloggedIn();


      })
      .catch((error) => {

        var errorMessage = error.message;
        console.log(errorMessage);

      });
  }

  const storeAuthToken = () =>{
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
    .then(function(idToken) {
      sessionStorage.setItem('token',idToken);
    }).catch(function(error) {
      // Handle error
    });
  }


  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  const addloggedIn =()=>{
      let newUser= user;
      dispatch(addLoggedInUser(newUser));
     
  }

  return (
    <div className=" login">
      <h4 className="text-uppercase">LOG IN TO Hotel-Transylvania</h4>
      <button className="btn btn-brand text-light fw-bold"onClick={handleGoogleSignIn}>Google Sign In</button>

    </div>
  );
};

export default Login;