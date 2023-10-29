import React from "react";

const Logo = () => {
	return (
		<div className="w-14 h-14 rounded-lg">
			{" "}
			<img
				src="../../src/assets/Logo.jpg"
				className=""
				style={{ width: "100%", height: "100%", borderRadius: "8px" }}
				alt="Logo voor Gekke battlescores"
			/>
		</div>
	);
};

export default Logo;
