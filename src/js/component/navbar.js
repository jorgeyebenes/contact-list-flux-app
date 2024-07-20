import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-light bg-light mb-3">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">HOME</span>
				</Link>
				<div className="ml-auto">
					<Link to="/add_contact">
						<button className="btn btn-primary">ADD CONTACT</button>
					</Link>
				</div>
			</nav>
		);
	}
}