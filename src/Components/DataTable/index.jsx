import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

function DataTable() {
	const rowData = [
		{ firstName: 'Celia', lastName: 'Mondeo', startDate: 30, department: 'Michigan', dateOfBirth: 20, street: 'Malcolm', city: 'NY', state: 'idk', zipCode: 5000 },
		{ firstName: 'Celia', lastName: 'Mondeo', startDate: 30, department: 'Michigan', dateOfBirth: 20, street: 'Malcolm', city: 'NY', state: 'idk', zipCode: 5000 },
	];
	return (
		<>
			<div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
				<AgGridReact rowData={rowData}>
					<AgGridColumn headerName="First Name" field="firstName" sortable={true} filter={true}></AgGridColumn>
					<AgGridColumn headerName="Last Name" field="lastName" sortable={true} filter={true}></AgGridColumn>
					<AgGridColumn headerName="Start Date" field="startDate" sortable={true} filter={true}></AgGridColumn>
					<AgGridColumn headerName="Department" field="department" sortable={true} filter={true}></AgGridColumn>
					<AgGridColumn headerName="Date of Birth" field="dateOfBirth" sortable={true} filter={true}></AgGridColumn>
					<AgGridColumn headerName="Street" field="street" sortable={true} filter={true}></AgGridColumn>
					<AgGridColumn headerName="City" field="city" sortable={true} filter={true}></AgGridColumn>
					<AgGridColumn headerName="State" field="state" sortable={true} filter={true}></AgGridColumn>
					<AgGridColumn headerName="Zip Code" field="zipCode" sortable={true} filter={true}></AgGridColumn>
				</AgGridReact>
			</div>
		</>
	);
}

export default DataTable;
