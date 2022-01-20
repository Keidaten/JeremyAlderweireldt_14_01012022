//components
import DropDown from '../Dropdown';
import DatePickerComponent from '../DatePickerComponent';
import TextInput from '../TextInput';

function Form() {
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
