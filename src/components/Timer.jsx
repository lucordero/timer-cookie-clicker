import React, { useEffect, useState } from "react";
import "./Timer.css";
import Editable from "react-editable-title";

const Timer = () => {
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);
	const [working, setWorking] = useState(false);
	const [nameTask, setNameTask] = useState("Name Task");
	const [[hrs, mins, secs], setTime] = useState([0, 0, 0]);
	const [focused, setFocused] = useState(false);

	const start = (e) => {
		e.preventDefault();

		document.getElementById("card").classList.add("working");

		setTime([hours, minutes, seconds]);
		if (hrs !== 0 || mins !== 0 || secs !== 0) {
			setWorking(true);
			return;
		}
		alert("Debe ingresar valores correctos en cada campo.");
	};
	const tick = () => {
		if (hrs === 0 && mins === 0 && secs === 0) reset();
		else if (mins === 0 && secs === 0) {
			setTime([hrs - 1, 59, 59]);
		} else if (secs === 0) {
			setTime([hrs, mins - 1, 59]);
		} else {
			setTime([hrs, mins, secs - 1]);
		}
	};
	const reset = () => {
		document.getElementById("card").classList.remove("working");

		setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);
		setWorking(false);
		setNameTask("Name Task");
	};

	useEffect(() => {
		const timerId = setInterval(() => tick(), 1000);
		return () => clearInterval(timerId);
	});

	const stop = () => {
		reset();
		setWorking(false);
	};

	//Editable handles
	const handleTextUpdate = (current) => {
		setNameTask(current);
	};

	return (
		<div>
			<div className="card" id="card">
				<div className="card-body">
					<Editable
						className="name-task"
						text={nameTask}
						saveOnBlur={true}
						placeholder="Type here"
						cb={handleTextUpdate}
						isFocused={focused}
					/>

					{working ? (
						<div>
							<p className="timer">{`${hrs.toString().padStart(2, "0")}:${mins
								.toString()
								.padStart(2, "0")}:${secs.toString().padStart(2, "0")}`}</p>
							<button className="btn btn-danger" onClick={stop}>
								Stop
							</button>
						</div>
					) : (
						<form className="timer">
							<input
								type="number"
								name="hours"
								id="hours"
								placeholder="Hs"
								value={hours}
								onChange={(e) => {
									setHours(e.target.value);
								}}
							/>
							:
							<input
								type="number"
								name="minutes"
								id="minutes"
								max="60"
								min="00"
								placeholder="Min"
								value={minutes}
								onChange={(e) => {
									setMinutes(e.target.value);
								}}
							/>
							:
							<input
								type="number"
								name="seconds"
								id="seconds"
								max="60"
								min="00"
								placeholder="Sec"
								value={seconds}
								onChange={(e) => {
									setSeconds(e.target.value);
								}}
							/>
							<br />
							<button className="btn btn-primary" onClick={start}>
								Start
							</button>
							<button className="btn btn-info mx-2" onClick={reset}>
								Reset
							</button>
						</form>
					)}
				</div>
			</div>
		</div>
	);
};

export default Timer;
