import React from 'react';

function PageHeaderNav(props) {

	const portfolioLink = "https://acvoyager.github.io/7580page/";
	const assignment2Link = "https://pages.github.ccs.neu.edu/cs7580sp21-seattle/chang_xu_assignment2/";

	return (
		<header>
			<nav className="navbar navbar-dark navbar-expand-lg bg-dark">
				<div className="container-fluid">
					<a className="navbar-brand" href="#brand">Chang Xu</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNavDropdown">
						<ul className="navbar-nav">
							<li className="nav-item">
								<a className="nav-link" href={portfolioLink + "index.html"}>Home</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href={portfolioLink + "clock.html"}>Clock</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href={assignment2Link}>Assignment2</a>
							</li>
							<li className="nav-item nav-item-current">
								<a className="nav-link" href="#assignment3">Assignment3</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href={portfolioLink + "coming-soon.html"}>Assignment4</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href={portfolioLink + "coming-soon.html"}>Assignment5</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href={portfolioLink + "coming-soon.html"}>Final Project</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
}

export default PageHeaderNav;