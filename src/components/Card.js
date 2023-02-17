import CardBody from './CardBody';
import CardImage from './CardImage';

//create the component
export default function Card(props) {
	return (
		<div className="card" style={{ width: '18rem' }}>
			<CardImage date={props.date} image={props.image} alt={props.blogHeader} />
			<CardBody blogHeader={props.blogHeader} post={props.post} />
		</div>
	);
}
