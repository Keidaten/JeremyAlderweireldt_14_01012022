import { useState } from 'react';

import { Modal } from 'simple-fade-modal-component';

//components
import DropDown from '../Dropdown';
import DatePickerComponent from '../DatePickerComponent';
import TextInput from '../TextInput';
import Button from '@mui/material/Button';

//redux
import { useSelector, useDispatch } from 'react-redux';

//selector
import { selectStore, selectFirstName, selectLastName } from '../../utils/selectors';

//features
import { reset } from '../../features/formData';
import { useEffect } from 'react';

function Form() {
	const store = useSelector(selectStore);
	const dispatch = useDispatch();

	const firstName = useSelector(selectFirstName);
	const lastName = useSelector(selectLastName);

	const [errorFirstName, setErrorFirstName] = useState();
	const [errorLastName, setErrorLastName] = useState();

	//user error feeback
	useEffect(() => {
		firstName.length > 0 && setErrorFirstName(false);
		lastName.length > 0 && setErrorLastName(false);
	}, [firstName, lastName]);

	//Form verificaton
	const handleSumbit = (e) => {
		e.preventDefault();
		if ((firstName === '' || undefined) & (lastName === '' || undefined)) {
			setErrorFirstName(true);
			setErrorLastName(true);
			return;
		}
		if (lastName === '' || undefined) {
			setErrorLastName(true);
			return;
		}
		if (firstName === '' || undefined) {
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
						<TextInput errorStatus={errorFirstName} id="firstName" label="First Name" />
						<TextInput errorStatus={errorLastName} id="lastName" label="Last Name" />
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
			<Modal autoRefreshOnExit={400} toggleModal={toggle} modalState={modalState} fadeDuration="400ms">
				Employee created !
			</Modal>
		</>
	);
}

export default Form;
