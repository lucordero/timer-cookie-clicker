import React from "react";
import Timer from "./components/Timer";
import "./App.css";

function App() {
	return (
		<div className="container">
			<button>+</button>
			<h1 className="row">Cookie Clicker Taks Timer </h1>
			<div className="row">
				{
					//TODO: Boton agregar timers, css
				}
				<div className="">
					<Timer></Timer>
				</div>
			</div>
		</div>
	);
}

export default App;
