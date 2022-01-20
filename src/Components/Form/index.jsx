//react
import { useState, useEffect } from 'react';

//components
import DropDown from '../Dropdown';
import DatePickerComponent from '../DatePickerComponent';
import TextInput from '../TextInput';

//data
import states from '../../Assets/Data/cities';
import departments from '../../Assets/Data/departments';

//redux
import { useDispatch } from 'react-redux';

//features
import { storePluginState } from '../../features/formData';

//plugins
//select
import Select from 'react-select';

function Form() {
	const dispatch = useDispatch();

	const [state, setState] = useState();
	const [department, setDepartment] = useState();

	useEffect(() => {
		state && dispatch(storePluginState(state.value, 'state'));
	}, [state, dispatch]);

	useEffect(() => {
		department && dispatch(storePluginState(department.label, 'department'));
	}, [department, dispatch]);

	return (
		<>
			<form action="#" id="create-employee">
				<TextInput id="firstName" label="First Name" />
				<TextInput id="lastName" label="Last Name" />

				<DatePickerComponent id="dateOfBirth" />
				<DatePickerComponent id="startDate" />

				<fieldset className="address">
					<legend>Address</legend>

					<TextInput id="street" label="Street" />
					<TextInput id="city" label="City" />

					<label htmlFor="state">State</label>
					<Select id="state" options={states} defaultValue={state} onChange={setState} />

					<TextInput id="zipCode" label="Zip Code" />
				</fieldset>
				<label htmlFor="department">Department</label>
				<Select id="department" options={departments} defaultValue={department} onChange={setDepartment} />
				<button>Save</button>
			</form>
		</>
	);
}

export default Form;
