import { useState } from 'react';

//components
import DropDown from '../Dropdown';
import DatePickerComponent from '../DatePickerComponent';
import TextInput from '../TextInput';
import Modal from '../Modal';
// import ModalUpgraded from '../ModalUpgraded';

//redux
import { useSelector, useDispatch } from 'react-redux';

//selector
import { selectStore } from '../../utils/selectors';

//features
import { reset } from '../../features/formData';

function Form() {
	const store = useSelector(selectStore);
	const dispatch = useDispatch();

	//local storage
	const updateEmployees = () => {
		//get localStorage and parse it
		let storage = JSON.parse(localStorage.getItem('Employee'));
		//ig storage null, initialize store as a table, if not : push storage to store
		storage === null ? (storage = [store]) : storage.push(store);
		//set localStorage with jsoned storage
		localStorage.setItem('Employee', JSON.stringify(storage));
	};

	const handleSumbit = (e) => {
		e.preventDefault();
		updateEmployees();
		dispatch(reset());
	};

	const [modalState, setModalState] = useState(false);

	const toggle = () => {
		setModalState((prev) => !prev);
	};

	return (
		<>
			<form action="#" id="create-employee" onSubmit={(e) => handleSumbit(e)}>
				<TextInput id="firstName" label="First Name" />
				<TextInput id="lastName" label="Last Name" />
				<DatePickerComponent id="dateOfBirth" />
				<DatePickerComponent id="startDate" />
				<fieldset className="address">
					<legend>Address</legend>
					<TextInput id="street" label="Street" />
					<TextInput id="city" label="City" />
					<DropDown id="state" />
					<TextInput id="zipCode" label="Zip Code" />
				</fieldset>
				<DropDown id="department" />
				<button onClick={toggle}>Save</button>
				<Modal toggleModal={toggle} modalState={modalState} fadeDuration="400ms">
					Employee created !
				</Modal>
			</form>
		</>
	);
}

export default Form;
