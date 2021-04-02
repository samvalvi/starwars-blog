import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export function PlanetsCard(props) {
	const { store, actions } = useContext(Context);
	//console.log("Fav", store.favorites);
	return (
		<div className="d-flex flex-nowrap overflow-auto">
			{store.planets.map((planet, index) => {
				return (
					<div className="card custom-card test my-4" key={index}>
						<img
							className="card-img-top"
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh3rDeGqhfMHdVCkogR1csg3lVCVXv5PQ09Q&usqp=CAU"
						/>
						<div className="card-body">
							<h5 className="card-title text-left">{planet.name}</h5>
							<div className="card-text text-left">
								<p>Population: {planet.population}</p>
								<p>Terrain: {planet.terrain}</p>
							</div>
							<div className="d-flex justify-content-between">
								<Link to={`/planet/${index}`}>
									<button className="btn btn-outline-primary">More Details!</button>
								</Link>
								<div
									className="favoritesContainer"
									onClick={() => {
										actions.addToFavoritesPlanets(planet.name);
									}}>
									{props.icon(planet.name)}
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
PlanetsCard.propTypes = {
	icon: PropTypes.func
};
