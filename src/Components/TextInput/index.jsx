//redux
import { useDispatch } from 'react-redux';

//features
import { storeUserInput } from '../../features/formData';

import { TextField } from '@mui/material';

function TextInput({ id, label, fill, errorStatus }) {
	const dispatch = useDispatch();

	return (
		<>
			<TextField
				helperText={errorStatus && 'please fill the ' + label}
				error={errorStatus}
				id="outlined-basic"
				label={label}
				variant="outlined"
				size="small"
				onChange={(e) => {
					dispatch(storeUserInput(e, id));
					fill(e.target.value.length);
				}}
			/>
		</>
	);
}
export default TextInput;
