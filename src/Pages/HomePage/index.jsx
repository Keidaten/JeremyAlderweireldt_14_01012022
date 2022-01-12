//react router
import { Link } from 'react-router-dom';

//components
import Header from '../../Components/Header';
import Form from '../../Components/Form';

function HomePage() {
	return (
		<>
			<Header />
			<div className="container">
				<Link to="/employee-list">View Current Employees</Link>
				<h2>Create Employee</h2>
				<Form />
			</div>
			{/* <div id="confirmation" className="modal">
				Employee Created!
			</div> */}
		</>
	);
}

export default HomePage;
