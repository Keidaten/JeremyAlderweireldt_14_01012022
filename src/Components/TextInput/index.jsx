//redux
import { useDispatch } from 'react-redux';

//features
import { storeUserInput } from '../../features/formData';

function TextInput({ id, label }) {
	const dispatch = useDispatch();
	return (
		<>
			<label htmlFor={id}>{label}</label>
			<input type="text" id={id} onChange={(e) => dispatch(storeUserInput(e, id))} />
		</>
	);
}
export default TextInput;
