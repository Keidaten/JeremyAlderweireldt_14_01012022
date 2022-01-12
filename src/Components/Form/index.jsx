//react
import { useState } from 'react';

//components
import DropDown from '../Dropdown';
import DatePickerComponent from '../DatePickerComponent';

//data
import states from '../../Assets/Data/cities';
import departments from '../../Assets/Data/departments';

function Form() {
	const [startDateOfBirth, setStartDateOfBirth] = useState();
	const [startDate, setStartDate] = useState();

	return (
		<>
			<form action="#" id="create-employee">
				<label for="first-name">First Name</label>
				<input type="text" id="first-name" />

				<label for="last-name">Last Name</label>
				<input type="text" id="last-name" />

				<label for="date-of-birth">Date of Birth</label>
				<DatePickerComponent id="date-of-birth" startDate={startDateOfBirth} setDate={setStartDateOfBirth} />

				<label for="start-date">Start Date</label>
				<DatePickerComponent id="start-date" startDate={startDate} setDate={setStartDate} />

				<fieldset className="address">
					<legend>Address</legend>

					<label for="street">Street</label>
					<input id="street" type="text" />

					<label for="city">City</label>
					<input id="city" type="text" />

					<label for="state">State</label>
					<DropDown id="state" options={states} />

					<label for="zip-code">Zip Code</label>
					<input id="zip-code" type="number" />
				</fieldset>

				<label for="department">Department</label>
				<DropDown id="department" options={departments} />
			</form>
			<button onclick="saveEmployee()">Save</button>
		</>
	);
}

export default Form;
