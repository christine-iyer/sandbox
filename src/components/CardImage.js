import React from 'react';
export default function CardImage(props) {
	return (
		<>
			<h6>{props.date} </h6>
			<img src={props.image} className="card-img-top" alt={props.blogHeader} />
		</>
	);
}
