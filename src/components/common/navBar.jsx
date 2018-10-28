import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = ({ logged }) => {
	return (
		<div className="navigation-wrp">
			<nav className="navigation">
				<ul className="navigation__main">
					<li className="navigation__el"><NavLink className="navigation__link" exact to="/">Home</NavLink></li>
					<li className="navigation__el"><NavLink className="navigation__link" to="/about">About</NavLink></li>
				</ul>
				<ul className="navigation__additional">
					{!logged
						? <li className="navigation__el"><NavLink className="navigation__link" to="/login">Login</NavLink></li>
						: (
							<React.Fragment>
								<li className="navigation__el"><NavLink className="navigation__link" to="/profile">Profile</NavLink></li>
								<li className="navigation__el"><a className="navigation__link" href="/">Logout</a></li>
							</React.Fragment>
						)
					}
				</ul>
			</nav>
		</div>
	);
}

export default NavBar;