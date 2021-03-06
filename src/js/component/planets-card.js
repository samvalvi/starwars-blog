import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import PlanetImg from "../../img/400x200.jpg";

export function PlanetsCard({ icon }) {
	const { store, actions } = useContext(Context);

	return (
		<div className="d-flex flex-nowrap overflow-auto">
			{store.planets.map((planet, index) => {
				return (
					<div className="card custom-card custom-height bg-dark m-4 row" key={index}>
						<img className="card-img-top" src={PlanetImg} alt="planet 400x200" />
						<div className="card-body">
							<h5 className="card-title text-left">{planet.name}</h5>
							<div className="card-text text-left">
								<p>Population: {planet.population}</p>
								<p>Terrain: {planet.terrain}</p>
							</div>
							<div className="d-flex justify-content-between">
								<Link to={`/planet/${index}`}>
									<button className="btn btn-danger" id={index}>
										Learn More!
									</button>
								</Link>
								<div
									className="favoritesContainer btn-outline-warning"
									onClick={() => {
										actions.addFavorite(planet.name);
									}}>
									{icon(planet.name)}
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
