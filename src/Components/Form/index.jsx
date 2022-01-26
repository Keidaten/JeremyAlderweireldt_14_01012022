//components
import DropDown from '../Dropdown';
import DatePickerComponent from '../DatePickerComponent';
import TextInput from '../TextInput';

//redux
import { useSelector } from 'react-redux';

function Form() {
	const store = useSelector((state) => state);

	console.log(store);

	//local storage
	const updateEmployees = () => {
		//get localStorage and parse it
		let storage = JSON.parse(localStorage.getItem('Employee'));
		console.log(storage);
		//ig storage null, initialize store as a table, if not : push storage to store
		storage === null ? (storage = [store]) : storage.push(store);
		//set localStorage with jsoned storage
		localStorage.setItem('Employee', JSON.stringify(storage));
	};

	const handleSumbit = (e) => {
		e.preventDefault();
		updateEmployees();
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
				<button>Save</button>
			</form>
		</>
	);
}

export default Form;
