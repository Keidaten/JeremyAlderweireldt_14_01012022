import { useState, useEffect } from 'react';

//redux
import { useDispatch } from 'react-redux';

//select
import Select from 'react-select';

//data
import states from '../../Assets/Data/cities';
import departments from '../../Assets/Data/departments';

//features
import { storePluginState } from '../../features/formData';

function DropDown({ id }) {
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
			{id === 'state' && (
				<div>
					<label htmlFor={id}>State</label>
					<Select menuPortalTarget={document.body} id={id} options={states} defaultValue={state} onChange={setState} />
				</div>
			)}
			{id === 'department' && (
				<div>
					<label htmlFor={id}>Department</label>
					<Select menuPortalTarget={document.body} id={id} options={departments} defaultValue={department} onChange={setDepartment} />
				</div>
			)}
		</>
	);
}

export default DropDown;
