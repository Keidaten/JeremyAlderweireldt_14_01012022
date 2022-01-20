//Reduxtoolkit
import { combineReducers, createStore } from 'redux';

//Reducers
import employeeData from '../features/formData';

//reducers
export const rootReducer = combineReducers({
	employeeData: employeeData,
});

//devtools
const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

//store
const store = createStore(rootReducer, reduxDevtools);

export { store };
