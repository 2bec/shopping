import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'

export default class ContentWrapper extends Component {
    constructor (props) {
        super(props);

        this.state = { 
          activeItem: 'home' 
        };
        // Manually bind this method to the component instance...
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    componentDidMount () {
        this.setState({
            activeItem: 'home' 
        });
    }

    handleItemClick (name) {
        alert(name);
        this.setState({
            activeItem: name 
        });
    }

    render() {
        const { activeItem } = this.state.activeItem

        return (
              <Menu pointing secondary>
                <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
                <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />
                <Menu.Item name='products' active={activeItem === 'products'} onClick={this.handleItemClick} />

                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input icon='search' placeholder='Buscar...' />
                    </Menu.Item>
                    <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
                </Menu.Menu>
              </Menu>
        )
    }
}