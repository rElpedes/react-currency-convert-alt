import React, { useState, useEffect } from "react";

export default function App() {
	const [usdVar, setUsdVar] = useState(0);
	const [audVar, setAudVar] = useState(0);

	return (
		<div>
			<h1>USD/AUD Conversion</h1>
			<div>
				<span className="currLabel">US $</span>
				<input
					type="number"
					className="usdInput"
					value={usdVar}
					onChange={(e) => {
						setUsdVar(e.target.value);
						setAudVar(e.target.value * 1.39);
					}}
				/>
			</div>
			<div className="equals">=</div>
			<div>
				<span className="currLabel">AU $</span>
				<input
					type="number"
					className="audInput"
					value={audVar}
					onChange={(e) => {
						setAudVar(e.target.value);
						setUsdVar(e.target.value * 0.72);
					}}
				/>
			</div>
		</div>
	);
}
