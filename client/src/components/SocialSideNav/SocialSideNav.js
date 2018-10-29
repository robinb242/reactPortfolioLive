 
import React, { Component } from 'react';
import {
Image, Menu, Message
} from 'semantic-ui-react';
import './SocialSideNav.css';

/*
const SocialSideNav = () => (

  <div id="mySidenav" className="sidenav">

      <a href='https://www.facebook.com/robin.bertuccelli/' target="blank" id="facebook">
        <img src={require('../../assets/images/if_facebook.png')}  alt="Facebook" style="width: 40px; margin-left: auto;
        margin-right: auto" />
      </a>

      <a href="https://github.com/robinb242" target="blank" id="github">
        <img src={require("../../assets/images/if_social-github.png")}  alt="Github" style="width: 40px; margin-left: auto;
        margin-right: auto" /> 
      </a>

      <a href="https://www.linkedin.com/in/robin-bertuccelli/" target="blank" id="linkedin">
        <img src={require('../../assets/images/if_linkedin.png' )}  alt="LinkedIn" style="width: 40px; margin-left: auto;
        margin-right: auto" />
      </a>

      <a href="https://www.imdb.com/name/nm3031887/?ref_=fn_al_nm_1" target="blank"  id="imdb">
        <img src={require("../../assets/images/imdb.png")}  alt="Imdb" style="width: 40px; margin-left: auto;
        margin-right: auto" />
      </a>

  </div>


);

export default "SocialSideNav";

*/

export default class SocialSideNav extends Component {
  handleClick = () => this.setState({ message: 'onClick handled' })

  render() {
    const { message } = this.state || {}

    return (
      <div>
        <Menu vertical id='vertMenuContainer'>

          <Menu.Item href='https://www.facebook.com/robin.bertuccelli/' rel="noreferrer noopener" target='_blank' className='socialIcons'>
            <Image src={require('../../assets/images/if_facebook.png')}  alt="Facebook" size='small' />
          </Menu.Item>

          <Menu.Item href='https://github.com/robinb242' rel="noreferrer noopener" target='_blank' className='socialIcons'>
            <Image src={require('../../assets/images/if_social-github.png')}  alt="Github" size='small' />
          </Menu.Item>
          

          <Menu.Item href='https://www.linkedin.com/in/robin-bertuccelli/' rel="noreferrer noopener" target='_blank' className='socialIcons'>
            <Image src={require('../../assets/images/if_linkedin.png')}  alt="LinkedIn" size='small' />
          </Menu.Item>
          

          <Menu.Item href='https://www.imdb.com/name/nm3031887/?ref_=fn_al_nm_1' rel="noreferrer noopener" target='_blank' className='socialIcons'>
            <Image src={require('../../assets/images/imdb.png')}  alt="IMDB" size='small' />
          </Menu.Item>
        
       </Menu>
      </div>
    )
  }
}