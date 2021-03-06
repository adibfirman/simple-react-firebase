import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

import project from './projects'
import auth from './auth'

export default combineReducers({
  project, auth,
  firestore: firestoreReducer,
  firebase: firebaseReducer
})
