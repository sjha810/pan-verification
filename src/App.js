import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Component/layout/Footer";
import Navbar from "./Component/layout/Navbar";
import Editemployee from "./Component/pages/Editemployee";
import Employee from "./Component/pages/Employee";
import EmployeeTable from "./Component/pages/EmployeeTable";

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/employee" component={Employee} />
				<Route exact path="/employeelist" component={EmployeeTable} />
				<Route exact path="/employee/edit/:id" component={Editemployee} />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
