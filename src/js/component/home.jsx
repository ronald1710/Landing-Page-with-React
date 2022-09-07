import React from "react";
import PropType from "prop-types";

const Home = () => {
	return (
		<nav className=" navbar-expand-lg navbar navbar-dark bg-dark">
  <div className="container-fluid">
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
    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active text-muted" aria-current="page" href="#">
          Home
        </a>
        <a className="nav-link text-muted" href="#">
          About
        </a>
        <a className="nav-link text-muted" href="#">
          Services
        </a>
        <a className="nav-link text-muted"href="#">
		Contact
		</a>
      </div>
    </div>
  </div>
</nav>
	);
};

const Principal1 = () => {
	return (
		<div className="jumbotron">
      <h1 className="display-4">Hello, world!</h1>
      <p className="lead">
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <hr className="my-4" />
      <p>
        It uses utility classes for typography and spacing to space content out
        within the larger container.
      </p>
      <p className="lead">
        <a className="btn btn-primary btn-lg" href="#" role="button">
          Learn more
        </a>
      </p>
    </div>
	);
};
const Principal2 = (props) => {
	return (
		<div className="card" style={{ width: "18rem" }}>
  <img src= {props.img} className="card-img-top" alt= {props.alt} />
  <div className="card-body">
    <h5 className="card-title">{props.tittle}</h5>
    <p className="card-text">
      {props.description}
    </p>
    <a href={props.link} className="btn btn-primary">
      {desLink}
    </a>
  </div>
</div>

	);
};
Principal2.propTypes = {
	img: PropType.string,
	alt: PropType.string,
	tittle: PropType.string,
	description: PropType.string,
	Link: PropType.string,
	desLink: PropType.string,

	
};
let img = [
	"https://avatars.githubusercontent.com/u/63676653?v=4",
	"https://avatars.githubusercontent.com/u/19788020?v=4",
	"",
	"https://media-exp1.licdn.com/dms/image/C4E03AQHb4GjapOKkCg/profile-displayphoto-shrink_800_800/0/1533756703637?e=1668038400&v=beta&t=7Nl2m0G_Urda-Iq7ip5B47eOoeBol5-IrY9v1LisJkI",
];
let alt = [
	"Martin",
	"Abel",
	"Greivin",
	"Ronald",
];
let tittle = ["Martin Coimbra", "Abel Gonzalez", "Greivin Rodriguez", "Ronald Azofeifa"];
let description = ["Soy de Argentina", "Soy de Republica Dominicana", "Soy de Tiquicia Señores","Soy de Tiquicia Señores"];
let link = ["https://github.com/MartinCoimbra", "https://github.com/abelgonzalezr",
 "https://github.com/ImFineZ", "https://github.com/ronald1710"];
let desLink = ["GitHub","GitHub","GitHub","GitHub"]

let Cards = img.map((singleimg, i) => {
	return (
		<Principal2
			img={singleimg}
			alt={alt[i]}
			titlle={tittle[i]}
			description={description[i]}
			link={link[i]}
			desLink={desLink[i]}
		/>
	);
});
	const Footer = () => {
	return (
		<div className="card text-white bg-dark ">
  <div className="card-body">
    <p className="card-text">Desarrollado por Greivin y Ronald, "TEAM TICO" </p>
  </div>
</div>

	);
};

export default {Home};

// Principal1    Principal2 o Cards  Footer