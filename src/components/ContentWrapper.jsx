import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class ContentWrapper extends Component {
    constructor(props){
        super(props);

        this.state = { 
          activeItem: '' 
        };
    }

    componentDidMount() {
        this.setState({ activeItem: 'home' })
    }

    handleItemClick(name) {
        this.setState({ activeItem: name })
    }

    render() {
        const { activeItem } = this.state.activeItem

        return (
              <Menu inverted>
                <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
                <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />
                <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} />
              </Menu>
        )
    }
}