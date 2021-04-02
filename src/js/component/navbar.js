import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import starwars from "../../img/logo.png";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<div className="navbar-brand mx-5" href="#">
					<img src={starwars} width="100" height="50" className="d-inline-block align-top" alt="logo" />
				</div>
			</Link>

			<div className="DropdownButton" title={"Favorites " + store.favorites.length}>
				{store.favorites.length == 0 ? (
					<div className="dropdown-item">Favorites</div>
				) : (
					store.favorites.map((favItem, ind) => {
						return (
							<div className="dropdown-item" key={ind}>
								{favItem}
								<i
									className="fas fa-trash-alt"
									onClick={() => {
										actions.deleteFavorite(favItem);
									}}
								/>
							</div>
						);
					})
				)}
			</div>
			<span>{store.favorites.length}</span>
		</nav>
	);
};
