import './styles.css';

// import Nav from './Nav';
// import Footer from './Footer';
// import Article from './Article';
import Card from './components/Card';
import cardsArr from './Data';

const cards = cardsArr.map((ele, idx) => {
	return (
		<Card
			key={idx}
			date={ele.date}
			blogHeader={ele.blogHeader}
			image={ele.image}
			post={ele.post}
		/>
	);
});

// console.log(cards);

export default function App() {
	return (
		<div className="App">
			<h1>Bootstrap Cards To Component Example</h1>
			<section className="cards">{cards}</section>
		</div>
	);
}
