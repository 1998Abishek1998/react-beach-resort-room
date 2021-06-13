/** @format */

import "./dist/style.css"
import Home from "./pages/Home"
import Rooms from "./pages/Rooms"
import SingleRoom from "./pages/SingleRoom"
import Error from "./pages/Error"

import { Route, Switch } from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {
	return (
		<>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home}></Route>
				<Route exact path="/Rooms" component={Rooms}></Route>
				<Route exact path="/Rooms/:slug" component={SingleRoom}></Route>
				<Route component={Error}></Route>
			</Switch>
		</>
	)
}

export default App
