//redux
import { useDispatch } from 'react-redux';

//features
import { storeUserInput } from '../../features/formData';

import { TextField } from '@mui/material';

function TextInput({ id, label }) {
	const dispatch = useDispatch();
	return (
		<>
			<TextField id="outlined-basic" label={label} variant="outlined" size="small" onChange={(e) => dispatch(storeUserInput(e, id))} />
		</>
	);
}
export default TextInput;
