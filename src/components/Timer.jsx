import React, { useState } from "react";

const Timer = () => {
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	const countDown = () => {};
	const reset = () => {};
	const start = () => {};

	return (
		<div>
			<div className="card">
				<div className="card-body">
					<h3 className="card-title" contentEditable="true">
						Name Timer
					</h3>
					<form onSubmit={countDown}>
						<input type="number" name="hours" id="hours" max="24" min="00" />
						<input
							type="number"
							name="minutes"
							id="minutes"
							max="60"
							min="00"
						/>
						<input
							type="number"
							name="seconds"
							id="seconds"
							max="60"
							min="00"
						/>

						<input
							type="submit"
							name="start"
							className="btn btn-primary"
							onClick={start}
						>
							Start
						</input>
					</form>
					<button className="btn btn-danger">Stop</button>
					<button className="btn btn-info" onClick={reset}>
						Reset
					</button>
				</div>
			</div>
		</div>
	);
};

export default Timer;
