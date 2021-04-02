import React, { useContext } from "react";
import "../../styles/home.scss";
import { CharactersCard } from "../component/character-card";
import { PlanetsCard } from "../component/planets-card";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const changeIconColor = name => {
		const nameBelonging = store.favorites.findIndex(favorite => favorite == name);
		if (nameBelonging === -1) {
			return <i className="far fa-heart" id="un-fav" />;
		} else {
			return <i className="fas fa-heart" id="fav" />;
		}
	};
	return (
		<div className="container mt-5">
			<div className="row">
				<h2>Characters</h2>
			</div>
			<CharactersCard icon={changeIconColor} />
			<div className="row mt-5">
				<h2>Planets</h2>
			</div>
			<PlanetsCard icon={changeIconColor} />
		</div>
	);
};
