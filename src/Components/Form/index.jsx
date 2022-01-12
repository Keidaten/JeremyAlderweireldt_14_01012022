//react
import { useState } from 'react';

//plugins
//datepicker
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Form() {
	const [startDateOfBirth, setStartDateOfBirth] = useState(new Date());
	const [startDate, setStartDate] = useState(new Date());

	return (
		<>
			<form action="#" id="create-employee">
				<label for="first-name">First Name</label>
				<input type="text" id="first-name" />

				<label for="last-name">Last Name</label>
				<input type="text" id="last-name" />

				<label for="date-of-birth">Date of Birth</label>
				<DatePicker id="date-of-birth" selected={startDateOfBirth} onChange={(date) => setStartDateOfBirth(date)} />

				<label for="start-date">Start Date</label>
				<DatePicker id="start-date" selected={startDate} onChange={(date) => setStartDate(date)} />

				<fieldset className="address">
					<legend>Address</legend>

					<label for="street">Street</label>
					<input id="street" type="text" />

					<label for="city">City</label>
					<input id="city" type="text" />

					<label for="state">State</label>
					<select name="state" id="state"></select>

					<label for="zip-code">Zip Code</label>
					<input id="zip-code" type="number" />
				</fieldset>

				<label for="department">Department</label>
				<select name="department" id="department">
					<option>Sales</option>
					<option>Marketing</option>
					<option>Engineering</option>
					<option>Human Resources</option>
					<option>Legal</option>
				</select>
			</form>
			<button onclick="saveEmployee()">Save</button>
		</>
	);
}

export default Form;
