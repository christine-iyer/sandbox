export default function CardBody(props) {
	console.log('this is props:', props);
	return (
		<div className="card-body">
			<h5 className="card-date">{props.date}</h5>
			<h3 className="card-blogHeader">{props.blogHeader} </h3>
			<p className="card-post">{props.post}</p>
		</div>
	);
}
