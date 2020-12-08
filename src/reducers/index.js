import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';

export default combineReducers({
	auth: authReducer,
	form: formReducer,
});

//the form reducer is coming from the redux-form package
