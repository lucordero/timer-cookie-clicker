import React, { useState } from "react";
import Timer from "./components/Timer";
import "./App.css";

function App() {
	const [countTimers, setCountTimers] = useState([1]);

	const addTimer = () => {
		setCountTimers([...countTimers, Date.now()]);
		console.log("timer agregado");
		console.log(countTimers);
	};
	const deleteTimer = () => {
		setCountTimers([countTimers.length()]);
		console.log("timer agregado");
		console.log(countTimers);
	};
	//TODO: hacer funcionar boron eliminar, agregar index para eliminar timer especifico

	return (
		<div className="container">
			<div className="row">
				<h1 className="col-8">Cookie Clicker Taks Timer </h1>
				<button
					className="btn btn-light col-1 align-items-right"
					onClick={addTimer}
				>
					Add Timer
				</button>
				<button
					className="btn btn-light col-1 align-items-right"
					onClick={deleteTimer}
				>
					Delete Timer
				</button>
				<div className="d-flex flex-wrap justify-content-between align-content-around">
					{countTimers.map((element) => {
						return <Timer id={element}></Timer>;
					})}
				</div>
			</div>
		</div>
	);
}

export default App;
