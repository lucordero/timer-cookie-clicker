import React from "react";
import Timer from "./components/Timer";
import "./App.css";

function App() {
	return (
		<div className="container">
			<div className="row">
				<div className="col-lg-6">
					<Timer></Timer>
				</div>
				<div className="col-lg-6 ">
					<Timer></Timer>
				</div>
			</div>
		</div>
	);
}

export default App;
