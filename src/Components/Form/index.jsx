import { useState, useReducer } from 'react';

import { Modal } from 'simple-fade-modal-component';

//features
import { storeUserInput } from '../../features/formData';

//components
import DropDown from '../Dropdown';
import DatePickerComponent from '../DatePickerComponent';
import TextInput from '../TextInput';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

//redux
import { useSelector, useDispatch } from 'react-redux';

//selector
import { selectStore } from '../../utils/selectors';

//features
import { reset } from '../../features/formData';
import { useEffect } from 'react';

function Form() {
	const store = useSelector(selectStore);
	const dispatch = useDispatch();

	//Form states
	const [fillFirstName, setFillFirstName] = useState(0);
	const [fillLastName, setFillLastName] = useState(0);
	//error handling
	const [errorFirstName, setErrorFirstName] = useState();
	const [errorLastName, setErrorLastName] = useState();

	useEffect(() => {
		fillFirstName > 0 && setErrorFirstName(false);
		fillLastName > 0 && setErrorLastName(false);
	}, [fillFirstName, fillLastName]);

	//Form verificaton
	const handleSumbit = (e) => {
		e.preventDefault();
		if ((fillFirstName === 0) & (fillLastName === 0)) {
			setErrorFirstName(true);
			setErrorLastName(true);
			return;
		}
		if (fillLastName === 0) {
			setErrorLastName(true);
			return;
		}
		if (fillFirstName === 0) {
			setErrorFirstName(true);
			return;
		} else setErrorFirstName(false);
		updateEmployees();
		dispatch(reset());
		toggle();
	};

	//local storage dispatch
	const updateEmployees = () => {
		//get localStorage and parse it
		let storage = JSON.parse(localStorage.getItem('Employee'));
		//ig storage null, initialize store as a table, if not : push storage to store
		storage === null ? (storage = [store]) : storage.push(store);
		//set localStorage with jsoned storage
		localStorage.setItem('Employee', JSON.stringify(storage));
	};

	//modal requirments
	const [modalState, setModalState] = useState(false);
	const toggle = () => {
		setModalState((prev) => !prev);
	};

	return (
		<>
			<form action="#" id="create-employee" onSubmit={(e) => handleSumbit(e)}>
				<div className="employee-infos">
					<fieldset className="employee-personal-infos">
						<legend>Employee infos</legend>
						<TextInput errorStatus={errorFirstName} id="firstName" label="First Name" fill={setFillFirstName} />
						<TextInput errorStatus={errorLastName} id="lastName" label="Last Name" fill={setFillLastName} />
						<DatePickerComponent id="dateOfBirth" />
						<DatePickerComponent id="startDate" />
					</fieldset>
					<fieldset className="employee-adress">
						<legend>Address</legend>
						<TextInput id="street" label="Street" />
						<TextInput id="city" label="City" />
						<DropDown id="state" />
						<TextInput id="zipCode" label="Zip Code" />
						<DropDown id="department" />
					</fieldset>
				</div>
				<Button type="submit" variant="contained" size="small">
					Save
				</Button>
			</form>
			<Modal toggleModal={toggle} modalState={modalState} fadeDuration="400ms">
				Employee created !
			</Modal>
		</>
	);
}

export default Form;
