//react
import { useState, useEffect } from 'react';

//redux
import { useDispatch } from 'react-redux';

//plugins
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// features
import { storePluginState } from '../../features/formData';

function DatePickerComponent({ id }) {
	const [dateOfBirth, setDateOfBirth] = useState();
	const [startDate, setStartDate] = useState();

	const dispatch = useDispatch();

	useEffect(() => {
		dateOfBirth && dispatch(storePluginState(dateOfBirth.toLocaleDateString(), 'dateOfBirth'));
	}, [dateOfBirth, dispatch]);

	useEffect(() => {
		startDate && dispatch(storePluginState(startDate.toLocaleDateString(), 'startDate'));
	}, [startDate, dispatch]);

	return (
		<>
			{id === 'dateOfBirth' && (
				<>
					<label htmlFor={id}>Date of Birth</label>
					<DatePicker dateFormat="dd/MM/yyyy" id={id} selected={dateOfBirth} onChange={(e) => setDateOfBirth(e)} />
				</>
			)}

			{id === 'startDate' && (
				<>
					<label htmlFor={id}>Date of Birth</label>
					<DatePicker dateFormat="dd/MM/yyyy" id={id} selected={startDate} onChange={(e) => setStartDate(e)} />
				</>
			)}
		</>
	);
}

export default DatePickerComponent;
