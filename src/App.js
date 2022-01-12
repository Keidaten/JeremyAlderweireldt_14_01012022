import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//pages
import HomePage from './Pages/HomePage';
import EmployeeListPage from './Pages/EmployeeListPage';

//css
import './App.css';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />}></Route>
				<Route path="/employee-list" element={<EmployeeListPage />}></Route>
			</Routes>
		</Router>
	);
}

export default App;
