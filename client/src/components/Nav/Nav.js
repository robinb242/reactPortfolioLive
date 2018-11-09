
import React, { Component } from 'react';
import { Menu, Dropdown, Image } from 'semantic-ui-react';
import "./Nav.css";
import { Link } from "react-router-dom";

export default class Nav extends Component {
  state = {}


  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
    
      <Menu id="NavMenu">
        <Menu.Item header>Robin Bertuccelli <br /> Web Developer</Menu.Item>
        <Menu.Item 
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}>

        <Link to="/" className="nav-link">  Home </Link> 
           </Menu.Item> 
      
      <Menu.Item
      name='portfolio'
      active={activeItem ==='portfolio'}
      onClick={this.handleItemClick}>
      <Link to='/portfolio' className='nav-link'> Portfolio </Link>
      </Menu.Item>

        <Menu.Item 
        name='resume' 
        active={activeItem === 'resume'} 
        onClick={this.handleItemClick}>
         <Link to="/resume" className="nav-link">  Resume </Link>
         </Menu.Item>

         <Menu.Item name='contact' 
         active={activeItem === 'contact'} 
         onClick={this.handleItemClick}>
         <Link to="/contact" className="nav-link">  Contact </Link>
         </Menu.Item>

        <Menu.Menu position='right'>
        	<Menu.Item name='facebookLink' active={activeItem === 'facebookLink'} onClick={this.handleItemClick} >
           <a href="https://www.facebook.com/robin.bertuccelli/" rel="noreferrer noopener" target="_blank" className="nav-link" title="Facebook"> <Image src={require('../../assets/images/if_facebook.png')}  alt="Facebook" size='mini' /> </a> 
          </Menu.Item>
          <Menu.Item name='githubLink' active={activeItem === 'githubLink'} onClick={this.handleItemClick} >
           <a href="https://github.com/robinb242" rel="noreferrer noopener" target="_blank" className="nav-link" title="Github"> <Image src={require('../../assets/images/if_social-github.png')}  alt="Facebook" size='mini' /> </a> 
          </Menu.Item>
          <Menu.Item name='linkedinLink' active={activeItem === 'linkedinLink'} onClick={this.handleItemClick} >
           <a href="https://www.linkedin.com/in/robin-bertuccelli/" rel="noreferrer noopener" target="_blank" tclassName="nav-link" title="LinkedIn"> <Image src={require('../../assets/images/if_linkedin.png')}  alt="Facebook" size='mini' /> </a> 
          </Menu.Item>
          <Menu.Item name='IMMDBLink' active={activeItem === 'IMDBLink'} onClick={this.handleItemClick} >
           <a href="https://www.imdb.com/name/nm3031887/?ref_=fn_al_nm_1" rel="noreferrer noopener" target="_blank" className="nav-link" title="Internet Movie Database"> <Image src={require('../../assets/images/imdb.png')}  alt="Facebook" size='mini' /> </a> 
          </Menu.Item>
        </Menu.Menu>
      </Menu>
     
    )
  }
}
