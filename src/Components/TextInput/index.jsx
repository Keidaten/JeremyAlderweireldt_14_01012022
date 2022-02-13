//redux
import { useDispatch } from 'react-redux';

//features
import { storeUserInput } from '../../features/formData';

import { TextField } from '@mui/material';

function TextInput({ id, label, errorStatus }) {
	const dispatch = useDispatch();

	return (
		<>
			<TextField
				helperText={errorStatus && 'please fill the ' + label}
				error={errorStatus}
				id={id}
				label={label}
				variant="outlined"
				size="small"
				onChange={(e) => {
					dispatch(storeUserInput(e, id));
				}}
			/>
		</>
	);
}
export default TextInput;
