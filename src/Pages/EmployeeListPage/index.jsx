import { Link } from 'react-router-dom';

import DataTable from '../../Components/DataTable';

function EmployeeListPage() {
	return (
		<div id="employee-div" className="container">
			<h1>Current Employees</h1>
			<Link to="/">Home</Link>
			<table id="employee-table" className="display"></table>
			<DataTable />
		</div>
	);
}

export default EmployeeListPage;
