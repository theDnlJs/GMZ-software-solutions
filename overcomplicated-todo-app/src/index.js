import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
import { rootReducer } from "./ducks/reducers";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyC4xeYH_uZogj67nJOohmw7w5GtTSz5_cA",
  authDomain: "gmz-planet.firebaseapp.com",
  databaseURL: "https://gmz-planet.firebaseio.com",
  projectId: "gmz-planet",
  storageBucket: "gmz-planet.appspot.com",
  messagingSenderId: "1019281471476",
  appId: "1:1019281471476:web:0f3316140331d0da25aba1",
  measurementId: "G-9K53QJN3RN"
};

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
};

firebase.initializeApp( firebaseConfig );
firebase.firestore();

const initialState = {};
const store = createStore( rootReducer, initialState );

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, //since we are using Firestore
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById( "root" )
);