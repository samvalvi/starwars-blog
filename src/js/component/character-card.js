import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import CharacterImg from "../../img/400x200.jpg";

export function CharactersCard({ icon }) {
	const { store, actions } = useContext(Context);

	return (
		<div className="d-flex flex-nowrap overflow-auto">
			{!store.characters
				? "loading..."
				: store.characters.map((person, index) => {
						return (
							<div className="card custom-card custom-height bg-dark m-4" key={index}>
								<img className="card-img-top" src={CharacterImg} alt="character 400x200" />
								<div className="card-body">
									<h5 className="card-title text-left">{person.name}</h5>
									<div className="card-text text-left">
										<p>Gender: {person.gender} </p>
										<p>Hair Color: {person.hair_color}</p>
										<p>Eye Color: {person.eye_color} </p>
									</div>
									<div className="d-flex justify-content-between">
										<Link to={`/people/${index}`}>
											<button className="btn btn-danger" id={index}>
												Learn more!
											</button>
										</Link>
										<div
											className="favoritesContainer btn-outline-warning"
											onClick={() => {
												actions.addFavorite(person.name);
											}}>
											{icon(person.name)}
										</div>
									</div>
								</div>
							</div>
						);
				  })}
		</div>
	);
}
CharactersCard.propTypes = {
	icon: PropTypes.func
};
