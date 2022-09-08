import React from "react";
import PropType from "prop-types";

const Home = () => {
	return (
		<nav className=" navbar-expand-lg navbar navbar-dark bg-dark">
  <div className="container">
    <a className="navbar-brand text-muted" href="#">
      Start Bootstrap
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon " />
    </button>
    <div className=" d-flex flex-row-reverse
 collapse navbar-collapse " id="navbarNavAltMarkup">
      <div className="navbar-nav ">
        <a className="nav-link active " aria-current="page" href="#">
          Home
        </a>
        <a className="nav-link " href="#">
          About
        </a>
        <a className="nav-link" href="#">
          Services
        </a>
        <a className="nav-link "href="#">
		Contact
		</a>
      </div>
    </div>
  </div>
</nav>
	);
};

	

export default Home;
