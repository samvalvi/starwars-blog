import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<div className="navbar-brand mx-5" href="#">
					<img
						src="https://i.pinimg.com/originals/c8/1b/f1/c81bf1592fcd3734f0a38ae75f07ade3.jpg"
						width="50"
						height="50"
						className="d-inline-block align-top"
						alt=""
					/>
				</div>
			</Link>

			<div className="DropdownButton" variant="primary" title={"Favorites " + store.favorites.length}>
				{store.favorites.length == 0 ? (
					<div classNmae="dropdown-item" href="#action/3.1">
						Nothing here!
					</div>
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
		</nav>
	);
};
