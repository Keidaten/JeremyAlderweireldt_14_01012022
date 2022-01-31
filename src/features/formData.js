//Reduxtoolkit
import { createReducer } from '@reduxjs/toolkit';

//initialState
const initialState = {
	firstName: '',
	lastName: '',
	dateOfBirth: '',
	startDate: '',
	department: '',
	street: '',
	city: '',
	state: '',
	zipCode: '',
};

const USERINPUT = 'storeUserInput';
const PLUGINSTATE = 'storePluginState';
const RESETSTATE = '';

export const storeUserInput = (event, inputType) => ({
	type: USERINPUT,
	payload: event.target.value,
	inputType: inputType,
});

export const storePluginState = (data, inputType) => ({
	type: PLUGINSTATE,
	payload: data,
	inputType: inputType,
});

export const reset = () => ({
	type: RESETSTATE,
});

export default createReducer(initialState, (builder) => {
	return builder
		.addCase(USERINPUT, (draft, action) => {
			if (action.inputType === 'firstName') {
				draft.firstName = action.payload;
				return;
			}
			if (action.inputType === 'lastName') {
				draft.lastName = action.payload;
				return;
			}
			if (action.inputType === 'street') {
				draft.street = action.payload;
				return;
			}
			if (action.inputType === 'city') {
				draft.city = action.payload;
				return;
			}
			if (action.inputType === 'zipCode') {
				draft.zipCode = action.payload;
				return;
			}
		})
		.addCase(PLUGINSTATE, (draft, action) => {
			if (action.inputType === 'dateOfBirth') {
				draft.dateOfBirth = action.payload;
				return;
			}
			if (action.inputType === 'startDate') {
				draft.startDate = action.payload;
				return;
			}
			if (action.inputType === 'state') {
				draft.state = action.payload;
				return;
			}
			if (action.inputType === 'department') {
				draft.department = action.payload;
				return;
			}
		})
		.addCase(RESETSTATE, () => {
			return initialState;
		});
});
