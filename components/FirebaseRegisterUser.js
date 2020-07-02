/* globals window */
import { useEffect, useState } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/app';
import 'firebase/auth';
import cookie from 'js-cookie';
import initFirebase from '../utils/auth/initFirebase';

// Init the Firebase app.
initFirebase();


const FirebaseAuth = () =>
{
    // Do not SSR FirebaseUI, because it is not supported.
    // https://github.com/firebase/firebaseui-web/issues/213
    const [renderAuth, setRenderAuth] = useState( false );
    const [password, setPassword] = useState( '' );
    const [email, setEmail] = useState( '' );
    const [errors, setErrors] = useState( "" );
    useEffect( () =>
    {
        if ( typeof window !== 'undefined' )
        {
            setRenderAuth( true );
        }
    }, [] );
    useEffect( ( errors ) =>
    {
        console.log( errors );

    }, [errors] );
    return (
        <div>
            <form onSubmit={( e ) =>
            {
                e.preventDefault();
                const form = {
                    email,
                    password
                };
                console.log( form );
                firebase.auth().createUserWithEmailAndPassword( email, password ).catch( ( e ) =>
                {
                    var errorCode = e.code;
                    var errorMessage = e.message;
                    setErrors( errorMessage );
                    console.log( errors );

                } );
            }}>
                <input defaultValue="email" onChange={( e ) =>
                {
                    setEmail( e.target.value );
                }} type="email" placeholder="email" />
                <input onChange={( e ) =>
                {
                    setPassword( e.target.value );
                }} defaultValue="password" type="password" placeholder="password" />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default FirebaseAuth;
