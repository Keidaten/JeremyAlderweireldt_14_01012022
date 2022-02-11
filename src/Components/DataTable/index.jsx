import { useState, useCallback, useRef } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

function DataTable() {
	const storage = JSON.parse(localStorage.getItem('Employee'));
	const [rowData] = useState(storage ? storage : []);

	const gridRef = useRef();
	const [gridApi, setGridApi] = useState(null);

	const onFirstDataRendered = useCallback(() => {
		gridRef.current.api.sizeColumnsToFit();
	}, []);

	const onPageSizeChanged = useCallback(() => {
		var value = document.getElementById('page-size').value;
		gridRef.current.api.paginationSetPageSize(Number(value));
	}, []);

	function onGridReady(params) {
		setGridApi(params.api);
	}

	const onFilterTextChange = (e) => {
		gridApi.setQuickFilter(e.target.value);
	};

	return (
		<div className="ag-theme-alpine datatable" style={{ width: '1100px', height: '536px' }}>
			<div className="table-settings">
				<div className="pagination-count-wrapper">
					Show
					<select className="pagination-count" onChange={onPageSizeChanged} id="page-size">
						<option value="10">10</option>
						<option value="25">25</option>
						<option value="50">50</option>
						<option value="100">100</option>
					</select>
					entries
				</div>
				<input type="search" placeholder="Filter..." onChange={onFilterTextChange}></input>
			</div>

			{/* onFirstDataRendered={onFirstDataRendered} */}
			<AgGridReact onGridReady={onGridReady} onFirstDataRendered={onFirstDataRendered} paginationPageSize={10} pagination={true} ref={gridRef} rowData={rowData}>
				<AgGridColumn headerName="First Name" field="firstName" sortable={true}></AgGridColumn>
				<AgGridColumn headerName="Last Name" field="lastName" sortable={true}></AgGridColumn>
				<AgGridColumn headerName="Start Date" field="startDate" sortable={true}></AgGridColumn>
				<AgGridColumn headerName="Department" field="department" sortable={true}></AgGridColumn>
				<AgGridColumn headerName="Date of Birth" field="dateOfBirth" sortable={true}></AgGridColumn>
				<AgGridColumn headerName="Street" field="street" sortable={true}></AgGridColumn>
				<AgGridColumn headerName="City" field="city" sortable={true}></AgGridColumn>
				<AgGridColumn headerName="State" field="state" sortable={true}></AgGridColumn>
				<AgGridColumn headerName="Zip Code" field="zipCode" sortable={true}></AgGridColumn>
			</AgGridReact>
		</div>
	);
}

export default DataTable;
