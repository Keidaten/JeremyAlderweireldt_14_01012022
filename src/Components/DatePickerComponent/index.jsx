//react
import { useState, useEffect } from 'react';

//redux
import { useDispatch } from 'react-redux';

//plugins
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { getMonth, getYear } from 'date-fns';
import range from 'lodash/range';

// features
import { storePluginState } from '../../features/formData';

//components

function DatePickerComponent({ id }) {
	const years = range(1990, getYear(new Date()) + 1, 1);
	const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

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
				<div>
					<label className="birth-date" htmlFor={id}>
						Birth date:{' '}
					</label>
					<DatePicker
						id={id}
						onChange={(e) => setDateOfBirth(e)}
						dateFormat="dd/MM/yyyy"
						renderCustomHeader={({ date, changeYear, changeMonth, decreaseMonth, increaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled }) => (
							<div
								style={{
									margin: 10,
									display: 'flex',
									justifyContent: 'center',
								}}
							>
								<button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
									{'<'}
								</button>
								<select value={getYear(date)} onChange={({ target: { value } }) => changeYear(value)}>
									{years.map((option) => (
										<option key={option} value={option}>
											{option}
										</option>
									))}
								</select>

								<select value={months[getMonth(date)]} onChange={({ target: { value } }) => changeMonth(months.indexOf(value))}>
									{months.map((option) => (
										<option key={option} value={option}>
											{option}
										</option>
									))}
								</select>

								<button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
									{'>'}
								</button>
							</div>
						)}
						selected={dateOfBirth}
					/>
				</div>
			)}

			{id === 'startDate' && (
				<div>
					<label htmlFor={id}>Start date: </label>
					<DatePicker
						id={id}
						onChange={(e) => setStartDate(e)}
						dateFormat="dd/MM/yyyy"
						renderCustomHeader={({ date, changeYear, changeMonth, decreaseMonth, increaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled }) => (
							<div
								style={{
									margin: 10,
									display: 'flex',
									justifyContent: 'center',
								}}
							>
								<button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
									{'<'}
								</button>
								<select value={getYear(date)} onChange={({ target: { value } }) => changeYear(value)}>
									{years.map((option) => (
										<option key={option} value={option}>
											{option}
										</option>
									))}
								</select>

								<select value={months[getMonth(date)]} onChange={({ target: { value } }) => changeMonth(months.indexOf(value))}>
									{months.map((option) => (
										<option key={option} value={option}>
											{option}
										</option>
									))}
								</select>

								<button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
									{'>'}
								</button>
							</div>
						)}
						selected={startDate}
					/>
				</div>
			)}
		</>
	);
}

export default DatePickerComponent;
