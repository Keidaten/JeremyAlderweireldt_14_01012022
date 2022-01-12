import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DatePickerComponent({ id, startDate, setDate }) {
	return (
		<>
			<DatePicker id={id} selected={startDate} onChange={(date) => setDate(date)} />
		</>
	);
}

export default DatePickerComponent;
