// import Home from "./pages/home/Home"
// import Topbar from "./components/topbar/Topbar"
// import Register from './pages/register/Register';
// import Login from "./pages/login/Login";
// import {
// 	BrowserRouter as Router,
// 	Switch,
// 	Route
// } from "react-router-dom"
// import Settings  from "./pages/settings/Settings"
// import SinglePost  from "./components/singlePost/SinglePost"

import Write from "./pages/write/Write";

// import Single from "./pages/single/Single";


function App() {
	return (
		// <Router>
		// 	<Topbar />

		// 	<Switch>
		// 		<Route exact path="/">
		// 			<Home />
		// 		</Route>

		// 		<Route path="/register">
		// 			<Register />
		// 		</Route>

		// 		<Route path="/login">
		// 			<Login />
		// 		</Route>
		// 	</Switch>
		// </Router>
		<div>
			{/* <Settings /> */}
			{/* <SinglePost /> */}

			{/* <Single /> */}
			<Write />
		</div>
	);
}

export default App;
