import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import starwars from "../../img/logo.png";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-dark bg-dark mb-3">
			<Link to="/">
				<div className="navbar-brand mx-5" href="#">
					<img src={starwars} width="100" height="50" className="d-inline-block align-top" alt="logo" />
				</div>
			</Link>

			<div className="dropdown">
				<button
					className="btn btn-warning dropdown-toggle"
					type="button"
					id="favoriteList"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Favorites
					<span className="badge bg-secondary m-1">{store.favorites.length}</span>
				</button>

				{store.favorites.length === 0 ? (
					<ul className="dropdown-menu" aria-labelledby="favoriteList">
						<li className="dropdown-item text-center">(empty)</li>
					</ul>
				) : (
					<ul className="dropdown-menu" aria-labelledby="favoriteList">
						{store.favorites.length === 0 ? (
							<p className="text-center">(Empty)</p>
						) : (
							store.favorites.map((fav, i) => (
								<li className="dropdown-item" key={i}>
									{fav}
									<i
										className="fas fa-trash"
										onClick={() => {
											actions.deleteFavorite(fav);
										}}
									/>
								</li>
							))
						)}
					</ul>
				)}
			</div>
		</nav>
	);
};
