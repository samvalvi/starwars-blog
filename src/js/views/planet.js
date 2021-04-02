import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import PlanetImg from "../../img/800x600.jpg";

export function DetailInfoPlanet() {
	const { store, action } = useContext(Context);
	const params = useParams();

	return (
		<div className="container">
			{store.planets.length > 0 && (
				<>
					<div className="row">
						<div className="col-md-8">
							<img src={PlanetImg} alt="planet 800x600" className="card-img-top" />
						</div>
						<div className="col-md-4 text-center row">
							<div className="align-self-center">
								<h5>{store.planets[params.planetid].name}</h5>
								<p>
									Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out
									print, graphic or web designs. The passage is attributed to an unknown typesetter in
									the 15th century who is thought to have scrambled parts of Cicero&apos;s De Finibus
									Bonorum et Malorum for use in a type specimen book
								</p>
							</div>
						</div>
					</div>
					<div className="dropdown-divider border border-danger" />
					<div className="row text-danger justify-content-md-center text-center mt-4">
						<div className="col-md-2 col-lg-1 mx-2">
							<p>Name</p>
							<p>{store.planets[params.planetid].name}</p>
						</div>
						<div className="col-md-2 col-lg-1 mx-2">
							<p>Climat</p>
							<p>{store.planets[params.planetid].climate}r</p>
						</div>
						<div className="col-md-2 col-lg-1 mx-2">
							<p>Population</p>
							<p>{store.planets[params.planetid].population}</p>
						</div>
						<div className="col-md-2 col-lg-1 mx-2">
							<p>Orbital Period</p>
							<p>{store.planets[params.planetid].orbital_period}</p>
						</div>
						<div className="col-md-2 col-lg-1 mx-2">
							<p>Diameter</p>
							<p>{store.planets[params.planetid].diameter}</p>
						</div>
					</div>
				</>
			)}
		</div>
	);
}
