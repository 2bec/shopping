import React, { Component } from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default class MenuTop extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [],
			activeItem: 'produtos'
		};
	}

	componentDidMount() {
		this.setState({activeItem: 'produtos'});
	}

	handleItemClick(e, name){
		console.log('Você clicou em: ', name);
	}

	render() {
		const { activeItem } = this.state

		return (
			<Menu size='huge'>
				<Menu.Item name='produtos' active={activeItem === 'produtos'} onClick={this.handleItemClick} />

				<Menu.Menu position='right'>

					<Menu.Item>
						<Button primary>Anunciar</Button>
					</Menu.Item>
				</Menu.Menu>
			</Menu>
		)
	}
}