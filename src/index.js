import React from "react";
import ReactDOM from "react-dom";
import SignInSide from "../src/siginIn/SignInSide";
import Dashboard from "../src/dashboard/Dashboard";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from 'react-router-dom';

ReactDOM.render(
	<BrowserRouter>
		<Switch>
    <Route path='/' exact component={SignInSide} />

    <Route path='/results' component={Dashboard} />
			
		</Switch>
	</BrowserRouter>,
	document.getElementById("root")
);
