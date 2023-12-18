import supabase from "../../config/supabaseClient.js";
import { DataTable } from "@/components/DataTable.js";
import { columns } from "../../components/Scores/columns.js";
import { Match } from "../../types/collection.js";
import React, { useEffect, useState } from "react";

async function getMatches(): Promise<Match[]> {
	const { data: matches } = await supabase
		.from("matches")
		.select(
			"matchid, matchdate, player1goals, player2goals, player1owngoals, player2owngoals, player1:player1UUID(playername), player2:player2UUID(playername)"
		);
	// Handle errors if needed
	return matches;
}

export default function Scores() {
	const [matches, setMatches] = useState<Match[]>([]);
	useEffect(() => {
		async function fetchData() {
			try {
				const result = await getMatches();
				setMatches(result);
			} catch (error) {
				console.error("Error fetching matches:", error);
				// Handle error as needed
			}
		}

		fetchData();
	}, []); // Empty dependency array means this effect runs once after the initial render

	// Now you can use the 'matches' state in your component
	return (
		<div className="container mx-auto py-10">
			<DataTable
				columns={columns}
				data={matches}
			/>
		</div>
	);
}
