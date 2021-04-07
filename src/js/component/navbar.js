import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import starwars from "../../img/logo.png";
import { NavDropdown, DropdownButton } from "react-bootstrap";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-dark bg-dark mb-3">
			<Link to="/">
				<div className="navbar-brand mx-5" href="#">
					<img src={starwars} width="100" height="50" className="d-inline-block align-top" alt="logo" />
				</div>
			</Link>
			<div className="mx-2">
				<DropdownButton variant="primary" title={"Favorites " + store.favorites.length}>
					{store.favorites.length == 0 ? (
						<NavDropdown.Item href="#action/3.1">(Empty)</NavDropdown.Item>
					) : (
						store.favorites.map((fav, i) => {
							return (
								<NavDropdown.Item key={i}>
									{fav}
									<i
										className="fas fa-trash float-right"
										onClick={() => {
											actions.deleteFavorite(fav);
										}}
									/>
								</NavDropdown.Item>
							);
						})
					)}
				</DropdownButton>
			</div>
		</nav>
	);
};
