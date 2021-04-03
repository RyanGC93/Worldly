import React, { useState } from "react";
import "./styles.css";

const Slider = () => {
	const [isChecked, setChecked] = useState(true);

	const toggleHandler = () => {
		setChecked(!isChecked);
	};

	return (
		<>
			<div>
				{isChecked && <div className="toggle-header">User</div>}
				{!isChecked && <div className="toggle-header">Ambassador</div>}
				<div
					className={`ToggleSwitch ${
						isChecked && "toggle-active"
					} ToggleSwitch__rounded`}
				>
					<div className="ToggleSwitch__wrapper">
						<div
							className={`Slider ${isChecked && "isChecked"}`}
							onClick={toggleHandler}
						></div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Slider;
