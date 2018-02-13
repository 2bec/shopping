import React from 'react';

function CardImage(props) {
	return (
		<img src={props.src} />
	)
}

function CardContent(props) {
	return (
		<div className="content">
			<CardImage
				src={props.image}
			/>
			<div className="header">{props.title}</div>
			<div className="meta">
				<span className="date">{props.meta}</span>
			</div>
			<div className="description">{props.description}</div>
		</div>
	)
}

function Button(props) {
	return (
		<input type="button" value={props.children} />
	)
}

function CardBotton(props) {
	return (
		<div className="extra content">
			<div className='ui two buttons'>
				<Button basic color='red'>Comprar</Button>
			</div>
		</div>
	)
}

class Card extends React.Component {

	constructor(props){
		super(props);
	}

	render() {
	return (
		<div className="ui card">
			<CardContent 
				image={this.props.image}
				title={this.props.name}
				meta={this.props.meta}
				description={this.props.description}
				condition={this.props.condition}
				seller={this.props.seller}
			/>
			<CardBotton />
		</div>
	);
	}
}

export default Card;