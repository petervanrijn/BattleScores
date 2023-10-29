import supabase from "../../config/supabaseClient.js";
import { useEffect, useState } from "react";

type Player = {
	playerid: number;
	playername: string;
};

const Home = () => {
	const [fetchError, setFetchError] = useState(null);
	const [players, setPlayers] = useState<Player[] | null>(null);

	useEffect(() => {
		const fetchPlayers = async () => {
			const { data, error } = await supabase.from("players").select("*");
			if (error) {
				setFetchError(error);
				console.log(error);
			} else {
				setPlayers(data);
			}
		};
		fetchPlayers();
	}, []);

	console.log(players);
	return (
		<div>
			{fetchError && <p>{fetchError}</p>}
			{players && (
				<div>
					{players.map((player) => {
						return <p key={player.playerid}>{player.playername}</p>;
					})}
				</div>
			)}
		</div>
	);
};

export default Home;
