import React from "react";
import PropType from "prop-types";

const Cards = (props) => {
	return (
		<div className="card" style={{ width: "18rem" }}>
  <img src= {props.img} className="card-img-top" alt= {props.alt} />
  <div className="card-body">
    <h5 className="card-title text-center">{props.tittle}</h5>
    <p className="card-text text-center">
      {props.description}
    </p>
    <a href={props.link} className="btn btn-primary  gap-2 col-3 mx-auto text-center">
      {props.desLink}
    </a>
  </div>
</div>

	);
};
Cards.propTypes = {
	img: PropType.string,
	alt: PropType.string,
	tittle: PropType.string,
	description: PropType.string,
	Link: PropType.string,
	desLink: PropType.string,

	
};
export default Cards;